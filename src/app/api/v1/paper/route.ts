import { dbConnect } from '@/db/connect'
import { Paper } from '@/models/papersModel'
import { PaperQueryType } from '@/types/types'
import mongoose from 'mongoose'

export async function GET(req: Request) {
  dbConnect()

  try {
    const { searchParams } = new URL(req.url)

    const universityId = searchParams.get('universityId')!
    const subject_title = searchParams.get('subject_title')
    const courseId = searchParams.get('courseId')
    const exam_year = searchParams.get('exam_year')
    const page = Number(searchParams.get('page')) || 1

    const query: any = {}

    if (universityId) {
      query.universityId = new mongoose.Types.ObjectId(universityId)
    }

    if (courseId) {
      query.courseId = new mongoose.Types.ObjectId(courseId)
    }

    if (subject_title) {
      query.subject_title = subject_title
    }

    if (exam_year) {
      query.exam_year = Number(exam_year)
    }

    const limit = 15
    const skip = (+page - 1) * +limit

    const papers = await Paper.aggregate([
      {
        $lookup: {
          from: 'universities',
          localField: 'universityId',
          foreignField: '_id',
          as: 'university',
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'course',
        },
      },
      {
        $addFields: {
          courseDetails: {
            $arrayElemAt: ['$course', 0],
          },
        },
      },
      {
        $addFields: {
          universityDetails: {
            $arrayElemAt: ['$university', 0],
          },
        },
      },
      {
        $match: query,
      },
    ])
      .skip(skip)
      .limit(limit)

    const paperCount = await Paper.countDocuments(query)

    if (!papers) {
      return Response.json(
        { success: false, message: 'Could not aggregate papers' },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Papers fetch successfully',
        papers,
        paperCount,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error fetching papers data:', error.message)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  dbConnect()
  try {
    const reqBody = await req.json()
    const { subject_title } = reqBody

    const paperExist = await Paper.findOne({ subject_title })
    if (paperExist) {
      return Response.json(
        {
          success: false,
          message: `Paper already exists with the title - ${subject_title}`,
        },
        { status: 400 }
      )
    }

    const paper = await Paper.create(reqBody)

    if (!paper) {
      return Response.json(
        {
          success: false,
          message: 'Could not create save paper data',
        },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Paper saved successfully',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving paper data:', error.message)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
