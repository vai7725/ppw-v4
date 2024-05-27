import { University } from '@/types/types'
import API from '@/utils/axiosInstance'
import { PROJECT_TITLE } from '@/utils/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: `${PROJECT_TITLE} | Universities`,
  description:
    'Explore our extensive collection of previous year exam papers from top universities. Our platform provides easy access to academic resources, helping students prepare effectively for their exams. Discover university-specific papers and enhance your study experience with our comprehensive database. Start your academic journey with the best study materials available',
}

export default async function UniversitiesPage() {
  const { data } = await API.get('/university')
  const universities = data.universities

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Helpful Information */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Browse Universities
          </h1>
          <p className="  text-gray-700 mb-4">
            Welcome to our universities page! Here you can explore information
            about various universities and their offerings. Whether you are a
            prospective student, a parent, or simply curious about higher
            education options, we have got you covered.
          </p>
          <p className="  text-gray-700 mb-4">
            Our platform provides a comprehensive list of universities, along
            with details such as university rankings, admission information,
            scholarship opportunities, and more. We are dedicated to helping you
            make informed decisions about your educational journey.
          </p>
          <p className="  text-gray-700 mb-4">
            If you have any questions or need assistance, feel free to reach out
            to us. We are here to support you every step of the way!
          </p>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Select University
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {universities.map((university: University) => (
              <div
                className="card w-full shadow rounded text-left"
                key={university._id}
              >
                <figure>
                  <Image
                    src={university.cover}
                    alt="University Image"
                    width={1000}
                    height={1000}
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{university.title}</h2>
                  <p>{university.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      href={`/courses/${university._id}`}
                      className="btn btn-primary btn-sm  w-full"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* More Universities Coming Soon */}
        <div className="text-center text-gray-600 mb-8">
          <p className=" mb-2">More Universities Coming Soon</p>
          <p className="text-sm">
            We are continuously adding more universities to our platform. Stay
            tuned for updates!
          </p>
        </div>
      </div>
    </div>
  )
}
