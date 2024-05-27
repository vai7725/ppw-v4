import Container from '@/components/custom/Container'
import { PROJECT_TITLE } from '@/utils/constants'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export const metadata: Metadata = {
  title:
    'About Us - Your Ultimate Resource for Past Exam Papers | Previous Year Papers',
  description:
    'Learn more about Previous Year Papers, your ultimate resource for accessing past exam papers from universities across the region. Discover our mission, vision, and commitment to providing comprehensive collections of previous year question papers to support students and educators.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Container className="max-w-4xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to {PROJECT_TITLE}, your ultimate resource for accessing
            past exam papers from universities across the region. Our mission is
            to support students and educators by providing a centralized
            platform where you can find and utilize previous year question
            papers effectively. Whether you are preparing for exams, conducting
            research, or just curious about exam trends, our extensive
            collection of past papers is designed to meet your needs.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            We aim to become the leading digital repository for previous year
            exam papers, ensuring that every student has the resources they need
            to excel in their studies. By making these papers easily accessible,
            we hope to foster a culture of thorough preparation and academic
            excellence.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Comprehensive Collection
              </h3>
              <p className="text-gray-700">
                Our platform features an extensive archive of previous year
                question papers from a variety of universities and courses. We
                cover a wide range of disciplines to cater to the diverse needs
                of students.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                User-Friendly Interface
              </h3>
              <p className="text-gray-700">
                Our website is designed with ease of use in mind. Navigate
                through our intuitive interface to quickly find the papers you
                need. The search and filter options allow you to locate specific
                papers efficiently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-700">
                We continuously update our database with the latest exam papers.
                Our team works diligently to ensure that you have access to the
                most recent papers as soon as they are available.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Free Access
              </h3>
              <p className="text-gray-700">
                All the resources on our platform are freely accessible. We
                believe that financial constraints should not be a barrier to
                education, and hence, we offer our extensive collection at no
                cost to the user.
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Our Website Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Use Our Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Browse by University
              </h3>
              <p className="text-gray-700">
                Start by selecting the university you are interested in. We list
                all the universities we cover, allowing you to easily find your
                institution.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Select Your Course
              </h3>
              <p className="text-gray-700">
                After choosing your university, proceed to select the specific
                course for which you need past papers. Our organized structure
                makes it simple to navigate through various courses.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Choose Exam Year
              </h3>
              <p className="text-gray-700">
                Once you have selected the course, you can choose the exam year.
                This step will help you access the most relevant papers for your
                preparation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Download Papers
              </h3>
              <p className="text-gray-700">
                After locating the papers you need, simply click to download
                them. Our platform supports quick and easy downloads, ensuring
                you can get the papers without any hassle.
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Commitment
          </h2>
          <p className="text-gray-700">
            We are dedicated to providing a reliable and valuable service to the
            academic community. Our commitment is to continuously improve and
            expand our platform to serve you better. Your success is our
            success, and we are here to support you every step of the way.
          </p>
          <p className="text-gray-700">
            Thank you for choosing Previous Year Papers as your go-to resource
            for past exam papers. We wish you all the best in your academic
            endeavors!
          </p>
        </div>

        {/* Developer Information Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-10 max-w-md mx-auto">
          <div className="flex items-center">
            <Image
              src="https://avatars.githubusercontent.com/u/107029078?v=4"
              alt="Developer"
              className=" size-28 rounded-full mr-4"
              width={500}
              height={500}
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Vaibhav Prajapat
              </h2>
              <p className="text-gray-600">Founder and Developer</p>
              <div className="flex mt-2">
                <Link
                  href="https://www.linkedin.com/in/vaibhavprajapat/"
                  target="_blank"
                  className="text-gray-800 hover:text-gray-900 mr-4"
                >
                  <FaLinkedin className="size-8" />
                </Link>
                <Link
                  href="https://www.instagram.com/vaibhav_prajapat_7725/"
                  target="_blank"
                  className="text-gray-800 hover:text-gray-900 mr-4"
                >
                  <FaInstagram className="size-8" />
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Hi! I am Vaibhav Prajapat, the founder and developer of{' '}
            {PROJECT_TITLE}. I am passionate about using technology to solve
            real-world problems and enhance the learning experience for
            students. Connect with me on social media to stay updated on the
            latest features and improvements to the platform.
          </p>
        </div>
      </Container>
    </div>
  )
}
