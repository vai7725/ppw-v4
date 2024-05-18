import mongoose, { Document, Schema } from 'mongoose'

interface CourseAttributes {
  title: string
  duration_years: number
  universityId: Schema.Types.ObjectId
  deleted?: boolean
  // added_by?: string;
  // edited_by?: string;
}

interface CourseDocument extends CourseAttributes, Document {
  createdAt: Date
  updatedAt: Date
}

const courseSchema = new Schema<CourseDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    duration_years: {
      type: Number,
      required: true,
      trim: true,
    },
    universityId: {
      type: Schema.Types.ObjectId,
      ref: 'universities',
      required: true,
      trim: true,
    },
    deleted: {
      type: Boolean,
      trim: true,
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

export const Course =
  mongoose.models.courses || mongoose.model('courses', courseSchema)
