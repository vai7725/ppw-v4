import { CiSearch } from 'react-icons/ci'
import { LiaTimesSolid } from 'react-icons/lia'

import FilterSection from './FilterSection'

export default function Sidebar() {
  return (
    <div className="drawer drawer-end w-fit block sm:hidden ">
      <input id="filter-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="filter-sidebar"
          className="drawer-button btn btn-ghost btn-sm"
        >
          <CiSearch className="size-6" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="filter-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">Filters</h1>
            <label
              htmlFor="filter-sidebar"
              className="text-3xl text-destructive"
            >
              <LiaTimesSolid />
            </label>
          </div>
          <FilterSection />
        </ul>
      </div>
    </div>
  )
}
