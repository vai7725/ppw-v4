import { dbConnect } from '@/db/connect'
import { University } from '@/models/universityModel'

export async function GET(req: Request) {
  dbConnect()

  try {
    const universities = await University.find()

    if (!universities) {
      return Response.json(
        { success: false, message: 'Could not fetch unviersities' },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'Univerities fetch successfully',
        universities,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching university data:', error)
    return Response.json(
      {
        success: false,
        message: 'Error fetching university data',
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

    const universityExist = await University.findOne({ title })
    if (universityExist) {
      return Response.json(
        {
          success: false,
          message: 'University already exist',
        },
        { status: 400 }
      )
    }

    const university = await University.create(reqBody)

    if (!university) {
      return Response.json(
        {
          success: false,
          message: 'Could not create save university data',
        },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: 'University saved successfully',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving university data:', error.message)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
