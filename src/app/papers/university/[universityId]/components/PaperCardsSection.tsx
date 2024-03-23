'use client'

import { useEffect, useState } from 'react'
import PaperCard from './PaperCard'
import service from '@/appwrite/config'

export default function PaperCardsSection() {
  const fetchPapers = async () => {
    const papers = await service.listPapers()
    console.log(papers)
  }
  useEffect(() => {
    fetchPapers()
  }, [])
  return (
    <div className="grid grid-cols-12 gap-4 w-full py-4 ">
      <PaperCard />
      <PaperCard />
      <PaperCard />
      <PaperCard />
    </div>
  )
}
