import Banner from './components/Banner'
// import Contact from './components/Contact'
import ContactUs from './components/ContactUs'
import Copyrights from './components/Copyrights'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import LatestNews from './components/LatestNews'
import Navbar from './components/Navbar'
import OurMission from './components/OurMission'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import TopCar from './components/TopCar'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <OurMission />
      <HowItWorks />
      <WhyChooseUs />
      <TopCar />
      <ContactUs />
      <Services />
      <Testimonial />
      <LatestNews />
      {/* <Contact /> */}
      <Footer />
      <Copyrights />
    </>
  )
}

export default App
