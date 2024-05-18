import { dbConnect } from '@/db/connect'
import { Paper } from '@/models/papersModel'

export async function GET(req: Request) {
  dbConnect()

  const { searchParams } = new URL(req.url)
  try {
    const universityId = searchParams.get('universityId')
    const courseId = searchParams.get('courseId')
    const exam_year = searchParams.get('exam_year')

    if (!universityId || !courseId || !exam_year) {
      return Response.json(
        {
          success: false,
          message: 'All related queries are required',
        },
        { status: 400 }
      )
    }
    const paperNames = await Paper.distinct('subject_title', {
      universityId,
      courseId,
      exam_year,
    })

    if (!paperNames) {
      return Response.json(
        { success: false, message: 'No titles found with related query' },
        { status: 400 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Paper names fetch successfully',
        paperNames,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error fetching paper names:', error.message)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
