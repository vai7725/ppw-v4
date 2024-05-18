export type University = {
  _id: string
  title: string
  description: string
  cover: string
}

export type Course = {
  _id: string
  title: string
  duration_years: number
  universityId: string
}

export type PaperQueryType = {
  universityId?: string
  courseId?: string
  exam_year?: string
  subject_title?: string
  page?: string
}

export type PaperType = {
  _id: string
  universityId: string
  courseId: string
  subject_title: string
  exam_year: number
  paper_year: number
  file_link: string
  views: number
  courseDetails: Course
}
