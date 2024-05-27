import heroImg from '@/assets/hero-img2.png'
import Container from '@/components/custom/Container'
import { PROJECT_TITLE } from '@/utils/constants'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className=" py-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <Container className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to {PROJECT_TITLE}
          </h1>
          <p className="text-xl mb-8">
            Your ultimate resource for accessing previous year question papers
            from universities across Rajasthan. Prepare effectively for your
            exams with our extensive collection of past papers, organized for
            your convenience.
          </p>
          <p className="text-lg">Key Features:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Extensive database of question papers</li>
            <li>Easy-to-navigate interface</li>
            <li>Detailed descriptions and metadata</li>
            <li>Regular updates with the latest papers</li>
          </ul>
          <p className="text-lg">
            Join thousands of students and educators who trust {PROJECT_TITLE}{' '}
            to help them succeed. Start exploring today and take the first step
            towards academic excellence!
          </p>
          {/* <a
            href="#browse-papers"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 mt-8 inline-block"
          >
            Get Started Now
          </a> */}
        </Container>

        {/* Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <Image src={heroImg} alt="Hero image" width={500} height={500} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
