import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI,
  headers: {
    'Content-Type': 'program/json',
  },

  withCredentials: true,
})

export default API
