'use client'

import { Course } from '@/types/types'
import API from '@/utils/axiosInstance'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function FilterSection() {
  const [courseData, setCourseData] = useState([])
  const [course, setCourse] = useState({})
  const [paperTitles, setPaperTitles] = useState([])
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseId = searchParams.get('courseId')
  const exam_year = searchParams.get('exam_year')
  const subject_title = searchParams.get('subject_title')

  const params = useParams<{ universityId: string }>()
  const fetchCourses = async (universityId: string) => {
    try {
      const { data } = await API.get(`/course`, {
        params: {
          universityId,
        },
      })
      setCourseData(data.courses)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const fetchCourseDetails = async (courseId: string) => {
    try {
      const { data } = await API.get(`/course/${courseId}`)
      setCourse(data.course)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const fetchPaperTitles = async (query: {
    courseId: string
    universityId: string
    exam_year: string
  }) => {
    try {
      const { data } = await API.get(`paper/fetchpapernames`, {
        params: query,
      })
      setPaperTitles(data.paperNames)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const clearFilters = () => {
    router.push(`${pathName}`)
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    fetchCourses(params.universityId)
  }, [])

  useEffect(() => {
    if (params.universityId && courseId) {
      fetchCourseDetails(courseId)
    }
  }, [courseId])

  useEffect(() => {
    if (params.universityId && courseId && exam_year) {
      fetchPaperTitles({
        courseId,
        universityId: params.universityId,
        exam_year,
      })
    }
  }, [exam_year])

  return (
    <>
      {(courseId || exam_year || subject_title) && (
        <div className="w-full flex items-center justify-end">
          <button
            className=" btn btn-sm btn-ghost"
            onClick={() => {
              clearFilters()
              setCourse({})
              setPaperTitles([])
            }}
          >
            Clear results
          </button>
        </div>
      )}
      {/* Courses */}
      <div className="collapse collapse-arrow rounded-lg">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-base font-medium">Courses</div>
        <div className="collapse-content">
          <div className="form-control items-start justify-start">
            {courseData.map((course: Course) => (
              <label key={course._id} className="label cursor-pointer">
                <input
                  type="radio"
                  className="radio radio-primary"
                  value={course._id}
                  checked={course._id === courseId}
                  name="courseId"
                  onChange={(e) => {
                    const name = e.target.name
                    const value = e.target.value
                    if (e.target.checked) {
                      router.push(`${pathName}?${name}=${value}`)
                    }
                  }}
                />
                <span className=" ml-2">{course.title}</span>
              </label>
            ))}
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
            {Object.keys(course).length !== 0 ? (
              Array.from({ length: course?.duration_years }).map((_, i) => (
                <label className="label cursor-pointer" key={i}>
                  <input
                    type="radio"
                    name="exam_year"
                    className="radio radio-primary"
                    value={i + 1}
                    onChange={(e) => {
                      const name = e.target.name
                      const value = e.target.value
                      if (e.target.checked) {
                        router.push(
                          `${pathName}?${createQueryString(name, value)}`
                        )
                      }
                    }}
                  />
                  <span className=" ml-2">Year {i + 1}</span>
                </label>
              ))
            ) : (
              <p className="text-sm">Select a course to see options</p>
            )}
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
            {paperTitles.length > 0 ? (
              paperTitles.map((title, i) => (
                <label className="label cursor-pointer" key={i}>
                  <input
                    type="radio"
                    name="subject_title"
                    className="radio radio-primary"
                    value={title}
                    onChange={(e) => {
                      const name = e.target.name
                      const value = e.target.value
                      if (e.target.checked) {
                        router.push(
                          `${pathName}?${createQueryString(name, value)}`
                        )
                      }
                    }}
                  />
                  <span className=" ml-2">{title}</span>
                </label>
              ))
            ) : (
              <p className="text-sm">Select exam year to see options</p>
            )}
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
    </>
  )
}
