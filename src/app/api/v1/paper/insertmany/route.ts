import { dbConnect } from '@/db/connect'
import { Paper } from '@/models/papersModel'

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

    const paper = await Paper.insertMany(reqBody)

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
