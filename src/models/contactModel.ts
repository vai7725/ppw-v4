import mongoose, { Schema } from 'mongoose'

interface ContactAttributes {
  firstName: string
  lastName: string
  email: string
  university: string
  message: string
}

interface ContactDocument extends ContactAttributes, Document {
  createdAt: Date
  updatedAt: Date
}

const contactSchema = new Schema<ContactDocument>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
    },
    university: {
      type: String,
      required: [true, 'University name is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  { timestamps: true }
)

export const Contact =
  mongoose.models.contacts || mongoose.model('contacts', contactSchema)
