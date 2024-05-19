import { Contact } from '@/models/contactModel'
import { dbConnect } from '@/db/connect'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  dbConnect()

  try {
    const reqBody = await req.json()

    const contact = await Contact.create(reqBody)

    if (!contact) {
      return Response.json(
        {
          success: false,
          message: 'Could not save contact query',
        },
        { status: 500 }
      )
    }

    return Response.json(
      {
        success: true,
        message: `We'll contact you shortly via email`,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error saving course data:', error.message)
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    )
  }
}
