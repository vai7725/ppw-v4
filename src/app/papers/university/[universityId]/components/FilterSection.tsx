'use client'

import { Course, PaperQueryType } from '@/types/types'
import API from '@/utils/axiosInstance'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function FilterSection() {
  const [courseData, setCourseData] = useState([])
  const [course, setCourse] = useState<{ duration_years?: number }>({})
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

      <Accordion type="multiple">
        {/* Courses */}
        <AccordionItem value="courses" className="px-4">
          <AccordionTrigger>Courses</AccordionTrigger>
          <AccordionContent>
            <RadioGroup>
              {courseData.map((course: Course) => (
                <div
                  className="flex items-center space-x-2 py-1"
                  key={course._id}
                >
                  <RadioGroupItem
                    value={course._id}
                    id={course._id}
                    checked={courseId === course._id}
                    onClick={(e) => {
                      const value = course._id
                      router.push(
                        `${pathName}?${createQueryString('courseId', value)}`
                      )
                    }}
                  />
                  <Label htmlFor={course._id}>{course.title}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        {/* Exam year */}
        <AccordionItem value="exam_year" className="px-4">
          <AccordionTrigger>Exam year</AccordionTrigger>
          <AccordionContent>
            <RadioGroup>
              {Object.keys(course).length !== 0 ? (
                Array.from({ length: course?.duration_years || 0 }).map(
                  (_, i) => (
                    <div className="flex items-center space-x-2 py-1" key={i}>
                      <RadioGroupItem
                        value={(i + 1).toString()}
                        id={(i + 1).toString()}
                        checked={exam_year === (i + 1).toString()}
                        onClick={(e) => {
                          const value = (i + 1).toString()
                          router.push(
                            `${pathName}?${createQueryString(
                              'exam_year',
                              value
                            )}`
                          )
                        }}
                      />
                      <Label htmlFor={(i + 1).toString()}>Year {i + 1}</Label>
                    </div>
                  )
                )
              ) : (
                <p className="text-sm">Select a course to see options</p>
              )}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        {/* Subject titles */}
        <AccordionItem value="subject_title" className="px-4">
          <AccordionTrigger>Subjects</AccordionTrigger>
          <AccordionContent>
            <RadioGroup>
              {paperTitles.length > 0 ? (
                paperTitles.map((title: string, i) => (
                  <div className="flex items-center space-x-2 py-1" key={i}>
                    <RadioGroupItem
                      value={title}
                      id={title}
                      checked={subject_title === title}
                      onClick={(e) => {
                        const value = title
                        router.push(
                          `${pathName}?${createQueryString(
                            'subject_title',
                            value
                          )}`
                        )
                      }}
                    />
                    <Label htmlFor={title}>{title}</Label>
                  </div>
                ))
              ) : (
                <p className="text-sm">Select exam year to see options</p>
              )}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
