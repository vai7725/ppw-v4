import { dbConnect } from '@/db/connect'
import { Course } from '@/models/courseModel'

export async function GET(req: Request) {
  dbConnect()

  try {
    const { searchParams } = new URL(req.url)

    const universityId = searchParams.get('universityId')

    if (!universityId) {
      return Response.json(
        {
          success: false,
          message: 'University ID is reuiqred to fetch courses',
        },
        { status: 400 }
      )
    }
    const courses = await Course.find({ universityId })

    if (!courses) {
      return Response.json(
        { success: false, message: 'Could not fetch unviersities' },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Courses fetch successfully',
        courses,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error fetching courses data:', error)
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
    const { title } = reqBody

    const courseExist = await Course.findOne({ title })
    if (courseExist) {
      return Response.json(
        {
          success: false,
          message: 'Course already exist',
        },
        { status: 400 }
      )
    }

    const course = await Course.create(reqBody)

    if (!course) {
      return Response.json(
        {
          success: false,
          message: 'Could not create save course data',
        },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Course saved successfully',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving course data:', error)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
