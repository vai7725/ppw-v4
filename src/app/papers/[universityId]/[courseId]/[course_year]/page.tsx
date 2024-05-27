import Container from '@/components/custom/Container'
import API from '@/utils/axiosInstance'
import { PROJECT_TITLE } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

interface PaperPageParams {
  params: {
    universityId: string
    courseId: string
    course_year: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: { courseId: string; course_year: string }
}) {
  const { courseId, course_year } = params

  const { data: courseData } = await API.get(`/course/${courseId}`)
  const course = courseData.course

  return {
    title: `Year - ${course_year} Papers | ${course.title} | ${PROJECT_TITLE}`,
  }
}

export default async function PapersPage({ params }: PaperPageParams) {
  const { universityId, courseId, course_year } = params

  const { data } = await API.get('/paper/fetchpapernames', {
    params: {
      universityId,
      courseId,
      exam_year: course_year,
    },
  })

  const paperTitles: string[] = data.paperNames

  // Sample data for page details (replace with actual data)
  const universityName = 'University of XYZ'
  const courseName = 'Course ABC'

  return (
    <div className="bg-gray-100">
      <Container className="max-w-4xl mx-auto py-20">
        {/* Introduction Section */}
        <div className="mx-auto mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore subjects
          </h1>
          <p className="  text-gray-700 mb-4">
            Welcome to our subjects page! Here, you can explore and select
            question paper you are looking for. Whether you are preparing for
            exams or conducting research, our platform provides access to a wide
            range of papers to assist you in your academic journey.
          </p>
          <p className="  text-gray-700 mb-4">
            Simply browse through the available titles below and click on the
            ones you would like to explore. Get question papers for that subject
            and start preparing.
          </p>
        </div>

        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
          Select Subject
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th>Subject</th>
                <th className="flex items-center justify-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paperTitles.map((title, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{title}</div>
                      </div>
                    </div>
                  </td>

                  <td className="flex items-center justify-end">
                    <Link
                      href={`/papers/${universityId}/${courseId}/${course_year}/${title
                        .split(' ')
                        .join('_')}`}
                      className="btn btn-ghost btn-sm"
                    >
                      Select
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </Container>
    </div>
  )
}
