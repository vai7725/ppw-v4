import mongoose, { Schema, Document } from 'mongoose'

interface UniversityAttributes {
  title: string
  description: string
  cover: string
  deleted?: boolean
  // added_by?: string
  // edited_by?: string
}

interface UniversityDocument extends UniversityAttributes, Document {
  createdAt: Date
  updatedAt: Date
}

const universitySchema = new mongoose.Schema<UniversityDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    cover: {
      type: String,
      required: true,
      trim: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    // added_by: {
    //   type: String,
    //   trim: true,
    //   default: undefined,
    // },
    // edited_by: {
    //   type: String,
    //   trim: true,
    //   default: undefined,
    // },
  },
  { timestamps: true }
)

export const University =
  mongoose.models.universities ||
  mongoose.model('universities', universitySchema)
