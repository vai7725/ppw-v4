import Link from 'next/link'
import React from 'react'

const BrowseUniversitiesSection = () => {
  return (
    <div className="bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Browse Universities
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore question papers from various universities in Rajasthan.
          </p>
          <Link
            href="/universities"
            className="btn btn-primary px-8 text-secondary rounded-full text-lg font-semibold transition duration-300"
          >
            Start Browsing
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BrowseUniversitiesSection
