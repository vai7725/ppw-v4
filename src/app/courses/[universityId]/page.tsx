import Container from '@/components/custom/Container'
import { Course } from '@/types/types'
import API from '@/utils/axiosInstance'
import { PROJECT_TITLE } from '@/utils/constants'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

interface CoursePageProps {
  params: {
    universityId: string
  }
}

// export const metadata: Metadata = {
//   title: ` | ${PROJECT_TITLE}`,
//   description: `Browse through a wide range of courses and access past exam papers relevant to your field of study. Explore our extensive collection of previous year question papers categorized by course to help you prepare for exams and enhance your learning experience.`,
// }

export async function generateMetadata({
  params,
}: {
  params: { universityId: string }
}) {
  const { data } = await API.get('/university/fetchuniversity', {
    params: { universityId: params.universityId },
  })

  const university = data.university

  return {
    title: `Courses - ${university.title} | ${PROJECT_TITLE}`,
    description: `Browse through a wide range of courses and access past exam papers relevant to your field of study. Explore our extensive collection of previous year question papers categorized by course to help you prepare for exams and enhance your learning experience`,
  }
}

export default async function CoursesPage({ params }: CoursePageProps) {
  const { universityId } = params

  const { data } = await API.get('/course', {
    params: {
      universityId,
    },
  })

  const courses = data.courses

  return (
    <div className="bg-gray-100">
      <Container className="max-w-4xl mx-auto  py-20">
        {/* Introduction Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Courses
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our diverse selection of courses! Discover the perfect
            path to your future career or academic pursuit. Whether you are
            exploring new interests or enhancing your skills, we have something
            for everyone.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our platform offers a comprehensive range of courses from top
            universities. Dive into our curated collection and embark on your
            educational journey today!
          </p>
        </div>
        {/* Courses Listing */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Select a Course
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course: Course, i: number) => (
              // <Link
              //   href={`/course-year/${course._id}`}
              //   key={course._id}
              //   className="bg-white rounded-lg shadow-md overflow-hidden p-4 cursor-pointer hover:bg-gray-200 transition duration-300"
              // >
              //   <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              //   <p className="text-gray-600">
              //     Duration: {course.duration_years} years
              //   </p>
              // </Link>
              <div key={course._id}>
                {/* The button to open modal */}
                <label
                  htmlFor={`modal-${i}`}
                  className="btn btn-outline w-full"
                >
                  {course.title}
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={`modal-${i}`}
                  className="modal-toggle"
                />
                <div className="modal" role="dialog">
                  <div className="modal-box text-left">
                    <h3 className="font-bold text-xl">Select Year</h3>
                    <ul className="menu rounded-box">
                      {Array.from({ length: course.duration_years }).map(
                        (_, i) => (
                          <li key={i}>
                            <Link
                              href={`/papers/${universityId}/${course._id}/${
                                i + 1
                              }`}
                            >
                              Year {i + 1}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="modal-action">
                      <label htmlFor={`modal-${i}`} className="btn">
                        Close!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
