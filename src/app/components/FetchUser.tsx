'use client'

import authService from '@/appwrite/auth'
import { useEffect } from 'react'

export default function FetchUser() {
  const fetchUser = async () => {
    const user = await authService.getCurrentUser()
    console.log(user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return <></>
}
