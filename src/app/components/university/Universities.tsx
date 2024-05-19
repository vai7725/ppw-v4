import Container from '@/components/custom/Container'
import UniversityCard from './UniversityCard'
import { University } from '@/types/types'
import API from '@/utils/axiosInstance'
import AdBanner from '@/components/custom/AdBanner'

export default async function Universities() {
  const res = await API.get('/university')
  const universityData = res.data
  return (
    <>
      <Container className="py-12 space-y-8 ">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">
          Universities
        </h1>
        <div className="py-2">
          <AdBanner
            dataAdFormat="auto"
            dataAdSlot={process.env.NEXT_PUBLIC_DATA_AD_SLOT!}
            pubId={process.env.NEXT_PUBLIC_ADSENSE_PID!}
            dataFullWidthResponsive={true}
          />
        </div>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {universityData.universities.map((university: University) => (
            <UniversityCard key={university._id} {...university} />
          ))}
        </div>
      </Container>
    </>
  )
}
