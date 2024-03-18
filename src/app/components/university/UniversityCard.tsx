import Link from 'next/link'

export default function UniversityCard() {
  return (
    <div className="card w-full bg-base-100 shadow-xl ring-gray-400 ring-1 max-w-80 rounded-lg">
      <figure className="aspect-video">
        <img
          src="https://res.cloudinary.com/df4b8tzrz/image/upload/v1709985853/img%20assets/mdsu-cover_s78tvx.avif"
          alt="university image"
          className="size-full"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">Maharshi Dayananda Saraswati university</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus at
          mollitia sit velit nam libero quibusdam earum ab. Quae assumenda
          incidunt illum corrupti ipsa. Quis atque error officia exercitationem
          qui!
        </p>
        <div className="card-actions justify-end">
          <Link
            href={`/papers/university/1`}
            className="btn btn-primary btn-sm w-full"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  )
}
