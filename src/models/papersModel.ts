import mongoose, { Schema } from 'mongoose'

interface PaperAttributes {
  universityId: Schema.Types.ObjectId
  courseId: Schema.Types.ObjectId
  subject_title: string
  exam_year: number
  paper_year: number
  file_link: string
  views?: number
  deleted?: boolean
  // added_by?: string;
  // edited_by?: string;
}

interface PaperDocument extends PaperAttributes, Document {
  createdAt: Date
  updatedAt: Date
}

const paperSchema = new Schema<PaperDocument>(
  {
    universityId: {
      type: Schema.Types.ObjectId,
      ref: 'universities',
      required: true,
      trim: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'courses',
      required: true,
      trim: true,
    },
    subject_title: {
      type: String,
      required: true,
      trim: true,
    },
    exam_year: {
      type: Number,
      required: true,
      trim: true,
    },
    paper_year: {
      type: Number,
      required: true,
      trim: true,
    },
    file_link: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
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
  {
    timestamps: true,
  }
)

export const Paper =
  mongoose.models.papers || mongoose.model('papers', paperSchema)
