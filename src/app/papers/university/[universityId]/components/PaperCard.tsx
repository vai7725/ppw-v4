export default function PaperCard() {
  return (
    <div className=" w-full bg-base-100 shadow shadow-primary ring-gray-400 ring-1 max-w-80 rounded-lg col-span-12 sm:col-span-6 md:col-span-4 mx-auto">
      <figure className="h-72 ">
        <img
          src="https://previouspapers.netlify.app/assets/paper-cover-ebdbe78e.jpeg"
          alt="university image"
          className="size-full rounded-t-lg"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-lg">Vision of education in India</h2>
        <p className="text-sm">B.Sc B.Ed - 1st year</p>
        <div className="flex items-center justify-between text-sm">
          <p>2018</p>
          <span>1 view(s)</span>
        </div>
        {/* <div className="card-actions justify-end">
          <Link
            href={`/papers/university/1`}
            className="btn btn-primary btn-sm w-full"
          >
            Select
          </Link>
        </div> */}
      </div>
    </div>
  )
}
