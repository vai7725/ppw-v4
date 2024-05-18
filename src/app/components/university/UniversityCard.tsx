import { University } from '@/types/types'
import Link from 'next/link'

export default function UniversityCard({
  _id,
  title,
  description,
  cover,
}: University) {
  return (
    <div className="card w-full bg-base-100 shadow-xl ring-gray-400 ring-1 max-w-80 rounded-lg">
      <figure className="aspect-video">
        <img src={cover} alt="university image" className="size-full" />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            href={`/papers/university/${_id}`}
            className="btn btn-primary btn-sm w-full"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  )
}
