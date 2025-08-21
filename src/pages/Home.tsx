import  BestDressSection from '../components/BestDressSection'
import FashionLanding from '../components/CollectionSection'
import HeroSection from '../components/Hero'
import Navbar from '../components/Nav'
import ServiceFeatures from '../components/ServiceFeatures'

const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <FashionLanding />
      <BestDressSection />
      <ServiceFeatures/>
    </div>
  )
}

export default Home
