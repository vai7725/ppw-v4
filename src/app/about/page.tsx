import Container from '@/components/custom/Container'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function About() {
  return (
    <div>
      <Container className="space-y-8">
        <section>
          <h1 className="text-2xl font-bold">Get to know us better</h1>
          <p>
            Our website is a valuable resource for students looking to ace their
            exams. We provide a vast collection of previous year question papers
            across different educational boards and universities. By accessing
            these papers, students can get a clear understanding of the exam
            pattern, important topics, and expected questions. This enables them
            to prepare better and perform well in their exams. Our user-friendly
            interface makes it easy to navigate and find relevant papers. Try us
            out and see the difference in your performance!
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-bold">Team</h1>
          <div className="flex items-center justify-center sm:justify-start">
            <div className="card w-full max-w-80 bg-secondary shadow shadow-primary rounded-lg">
              <figure className="p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/107029078?v=4"
                  alt="Shoes"
                  className="rounded-full aspect-square"
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body items-start text-start p-4">
                <h2 className="card-title">Vaibhav Prajapat</h2>
                <p>Founder and Developer</p>
                <div className="flex">
                  <Link
                    href={`https://www.linkedin.com/in/vaibhavprajapat/`}
                    target="_blank"
                  >
                    <FaLinkedin className="size-8" />
                  </Link>
                  <Link
                    href={`https://www.instagram.com/vaibhav_prajapat_7725/`}
                    target="_blank"
                  >
                    <FaInstagram className="size-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xl font-bold">Credits</h1>
          <ul className="pl-4 list-disc">
            <li>
              <b>Components: </b> Daisy UI
            </li>
            <li>
              <b>Utility icons: </b> React icons
            </li>
            <li>
              <b>Components: </b> Daisy UI
            </li>
          </ul>
        </section>
      </Container>
    </div>
  )
}
