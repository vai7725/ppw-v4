import Container from '@/components/custom/Container'
import FilterSection from './components/FilterSection'
import Sidebar from './components/Sidebar'
import { Metadata } from 'next'
import PaperCardsSection from './components/PaperCardsSection'
import API from '@/utils/axiosInstance'
import PaginationBar from './components/PaginationBar'

export async function generateMetadata({
  params,
}: {
  params: { universityId: string }
}): Promise<Metadata> {
  const { data } = await API.get('/university/fetchuniversity', {
    params: {
      universityId: params.universityId,
    },
  })
  return {
    title: `Question Papers | ${data.university.title}`,
  }
}

export default async function PaperSection({
  params,
}: {
  params: { universityId: string }
}) {
  const { data } = await API.get('/university/fetchuniversity', {
    params: {
      universityId: params.universityId,
    },
  })

  const { university } = data

  return (
    <div className="py-12 bg-white">
      <Container className="space-y-4 min-h-screen">
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
            <h2 className="font-bold text-2xl">{university.title}</h2>
            <PaperCardsSection />
          </section>
        </div>
        <PaginationBar />
      </Container>
    </div>
  )
}
