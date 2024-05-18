import { dbConnect } from '@/db/connect'
import { Course } from '@/models/courseModel'

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  dbConnect()

  try {
    const { courseId } = params

    if (!courseId) {
      return Response.json(
        {
          success: false,
          message: 'Course ID is reuiqred to fetch course details',
        },
        { status: 400 }
      )
    }
    const course = await Course.findById(courseId)

    if (!course) {
      return Response.json(
        {
          success: false,
          message: `No course found with the id - ${courseId}`,
        },
        { status: 400 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Course fetched successfully',
        course,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error fetching course data:', error)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
