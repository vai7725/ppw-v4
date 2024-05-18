import { PaperType } from '@/types/types'
import Link from 'next/link'

export default function PaperCard({
  subject_title,
  exam_year,
  paper_year,
  file_link,
  views,
  courseDetails,
}: PaperType) {
  return (
    <div className=" w-full bg-base-100 shadow shadow-primary ring-gray-400 ring-1 max-w-80 rounded-lg col-span-12 sm:col-span-6 md:col-span-4 mx-auto flex flex-col justify-between">
      <figure className="h-72 ">
        <img
          src="https://previouspapers.netlify.app/assets/paper-cover-ebdbe78e.jpeg"
          alt="Question paper image"
          className="size-full rounded-t-lg"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-lg leading-5">{subject_title}</h2>
        <p className="text-sm">
          {courseDetails.title} - Year {exam_year}
        </p>
        <div className="flex items-center justify-between text-sm">
          <p>{paper_year}</p>
          <span>{views} view(s)</span>
        </div>
      </div>
      <div className=" p-2 card-actions justify-end">
        <Link href={file_link} className="btn btn-primary btn-sm w-full">
          Open
        </Link>
      </div>
    </div>
  )
}