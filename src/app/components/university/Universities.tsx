import Container from '@/components/custom/Container'
import UniversityCard from './UniversityCard'

export default function Universities() {
  return (
    <>
      <Container className="py-12 space-y-8 ">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Universities
        </h1>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          <UniversityCard />
        </div>
      </Container>
    </>
  )
}
