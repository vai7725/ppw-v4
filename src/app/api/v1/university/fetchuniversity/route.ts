import { dbConnect } from '@/db/connect'
import { University } from '@/models/universityModel'

export async function GET(req: Request) {
  dbConnect()
  try {
    const { searchParams } = new URL(req.url)
    const universityId = searchParams.get('universityId')

    const university = await University.findById(universityId)

    if (!university) {
      return Response.json(
        {
          success: false,
          message: `No university found with the id - ${universityId}}`,
        },
        { status: 400 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'University fetched successfully',
        university,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving university data:', error)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
