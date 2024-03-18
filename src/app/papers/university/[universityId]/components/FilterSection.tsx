export default function FilterSection() {
  return (
    <>
      {/* Courses */}
      <div className="collapse collapse-arrow rounded-lg">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-base font-medium">Courses</div>
        <div className="collapse-content">
          <div className="form-control items-start justify-start">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
              />
              <span className=" ml-2">Remember me</span>
            </label>
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>

      {/* Exam year */}
      <div className="collapse collapse-arrow rounded-lg">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base font-medium">Exam year</div>
        <div className="collapse-content">
          <div className="form-control items-start justify-start">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
              />
              <span className=" ml-2">Remember me</span>
            </label>
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>

      {/* Subjects */}
      <div className="collapse collapse-arrow rounded-lg">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-base font-medium">Subjects</div>
        <div className="collapse-content">
          <div className="form-control items-start justify-start">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
              />
              <span className=" ml-2">Remember me</span>
            </label>
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
    </>
  )
}
