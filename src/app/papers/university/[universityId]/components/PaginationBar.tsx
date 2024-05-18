'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function PaginationBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const page = Number(searchParams.get('page')) || 1

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  const [paperCount, setPaperCount] = useState(0)
  const pagesCount = Math.floor(paperCount / 15)

  useEffect(() => {
    setPaperCount(Number(localStorage.getItem('paperCount')))
  }, [page])

  return (
    <div className="w-full flex items-center justify-center">
      <div className="join">
        <input
          className={`join-item btn ${page === 1 ? 'btn-disabled' : ''}`}
          type="radio"
          name="options"
          aria-label={'Prev'}
          disabled={page === 1}
          onClick={() => {
            router.replace(
              `${pathName}?${createQueryString(
                'page',
                (page > 1 ? page - 1 : 1).toString()
              )}`
            )
          }}
        />
        <input
          className={`join-item btn ${
            page === pagesCount ? 'btn-disabled' : ''
          }`}
          type="radio"
          name="options"
          aria-label={'Next'}
          disabled={page === pagesCount}
          onClick={() => {
            router.push(
              `${pathName}?${createQueryString(
                'page',
                (page < pagesCount ? page + 1 : pagesCount).toString()
              )}`
            )
          }}
        />
      </div>
    </div>
  )
}
