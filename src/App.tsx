
import './App.css'
import  BestDressSection from './components/BestDressSection'
import FashionLanding from './components/CollectionSection'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Navbar from './components/Nav'
import ServiceFeatures from './components/ServiceFeatures'
import './index.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <HeroSection />
      <FashionLanding />
      <BestDressSection />
      <ServiceFeatures/>
      <Footer/>

    </div>
  )
}

export default App
