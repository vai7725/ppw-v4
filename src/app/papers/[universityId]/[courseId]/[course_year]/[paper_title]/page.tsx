import PaperCover from '@/assets/paper_cover.png'
import Container from '@/components/custom/Container'
import { PaperType } from '@/types/types'
import API from '@/utils/axiosInstance'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECT_TITLE } from '@/utils/constants'

interface PapersPageParamsProps {
  params: {
    universityId: string
    courseId: string
    course_year: string
    paper_title: string
  }
}

export async function generateMetadata({
  params,
}: {
  params: {
    universityId: string
    courseId: string
    course_year: string
    paper_title: string
  }
}) {
  const { universityId, courseId, course_year, paper_title } = params
  const { data: universityData } = await API.get(
    '/university/fetchuniversity',
    { params: { universityId } }
  )
  const { data: courseData } = await API.get(`/course/${courseId}`)

  const course = courseData.course
  const university = universityData.university
  return {
    title: `${paper_title.split('_').join(' ')} | Year ${course_year} | ${
      course.title
    } | ${university.title} | ${PROJECT_TITLE}`,
  }
}

export default async function PapersPage({ params }: PapersPageParamsProps) {
  const { universityId, courseId, course_year, paper_title } = params

  const { data } = await API.get('/paper', {
    params: {
      universityId,
      courseId,
      exam_year: course_year,
      subject_title: paper_title.split('_').join(' '),
    },
  })

  const papers = data.papers
  const onePaper = data.papers[0]

  // Sample data for page details (replace with actual data)
  const universityName = onePaper?.universityDetails?.title
  const courseName = onePaper?.courseDetails?.title

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container className="max-w-4xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Exam Papers from &quot;{universityName}&quot;
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            <b>Course:</b> {courseName}
          </p>
          <p className="text-xl text-gray-700">
            Browse through the collection of previous year exam papers.
          </p>
        </div>
        {/* Papers Listing */}
        <div className="bg-white px-2 rounded-lg shadow-lg max-w-4xl">
          {papers.map((paper: PaperType) => (
            <div
              key={paper._id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <Image
                src={PaperCover.src}
                alt="Paper"
                width={500}
                height={500}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  {paper.subject_title}
                </h3>
                <p className="text-gray-600">
                  {paper.courseDetails.title} - Year {paper.exam_year}
                </p>
                <p className="text-gray-600">{paper.paper_year}</p>
                <p className="text-gray-600">View(s): {paper.views}</p>
              </div>
              <Link
                href={paper.file_link}
                className="btn btn-link px-0 text-base"
              >
                Open
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
