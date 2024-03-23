import Container from '@/components/custom/Container'
import FilterSection from './components/FilterSection'
import Sidebar from './components/Sidebar'
import { Metadata } from 'next'
import PaperCardsSection from './components/PaperCardsSection'

export const metadata: Metadata = {
  title: 'Question Papers',
}

export default function PaperSection() {
  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl sm:text-4xl font-bold">Question papers</h1>
          <Sidebar />
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-12">
          <aside className="col-span-3 space-y-2 hidden sm:block sticky top-0 h-fit">
            <FilterSection />
          </aside>
          <section className="col-span-12 sm:col-span-9 p-2 space-y-4">
            <h2 className="font-bold text-2xl">
              Maharshi Dayananda Saraswati University
            </h2>
            <PaperCardsSection />
          </section>
        </div>
      </Container>
    </div>
  )
}
