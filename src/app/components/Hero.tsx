import Container from '@/components/custom/Container'
import Image from 'next/image'
import heroImg from '@/assets/hero-img.webp'

export default function Hero() {
  return (
    <div className="border-b-2 py-12">
      <Container className=" flex flex-col-reverse sm:flex-row items-center justify-between">
        <div className="">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
            Download and <br />
            prepare for your exam
          </h1>
        </div>
        <div className="">
          <Image src={heroImg} alt="heroImg" width={500} height={500} />
        </div>
      </Container>
    </div>
  )
}
