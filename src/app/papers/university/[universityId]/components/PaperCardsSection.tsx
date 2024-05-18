'use client'

import { useEffect, useState } from 'react'
import PaperCard from './PaperCard'
import { useParams, useSearchParams } from 'next/navigation'
import API from '@/utils/axiosInstance'
import { PaperQueryType, PaperType } from '@/types/types'

export default function PaperCardsSection() {
  const params = useParams<{ universityId: string }>()
  const searchParams = useSearchParams()
  const courseId = searchParams.get('courseId')
  const exam_year = searchParams.get('exam_year')
  const subject_title = searchParams.get('subject_title')
  const page = searchParams.get('page')
  const { universityId } = params

  const [papers, setPapers] = useState([])

  const fetchPapers = async (query: PaperQueryType) => {
    const { data } = await API.get(`/paper`, {
      params: query,
    })

    localStorage.setItem('paperCount', JSON.stringify(data.paperCount))
    setPapers(data.papers)
  }

  useEffect(() => {
    const query: PaperQueryType = {}
    if (universityId) {
      query.universityId = universityId
    }
    if (courseId) {
      query.courseId = courseId
    }
    if (exam_year) {
      query.exam_year = exam_year
    }
    if (subject_title) {
      query.subject_title = subject_title
    }
    if (page) {
      query.page = page
    }
    fetchPapers(query)
  }, [courseId, exam_year, subject_title, page])

  return (
    <div className="grid grid-cols-12 gap-4 w-full py-4 ">
      {papers.map((paper: PaperType) => (
        <PaperCard key={paper._id} {...paper} />
      ))}
    </div>
  )
}
