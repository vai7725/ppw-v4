import Hero from './components/Hero'
import Universities from './components/university/Universities'

export default async function page() {
  return (
    <div>
      {/* <FetchUser /> */}
      <Hero />
      <Universities />
    </div>
  )
}
