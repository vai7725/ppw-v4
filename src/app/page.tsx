import AboutSection from './components/AboutSection'
import BrowseUniversitiesSection from './components/BroserUniversities'
import HeroSection from './components/Hero'

export default async function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BrowseUniversitiesSection />
    </div>
  )
}
