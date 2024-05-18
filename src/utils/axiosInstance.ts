import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SERVER_URI,
  },

  withCredentials: true,
})

export default API
