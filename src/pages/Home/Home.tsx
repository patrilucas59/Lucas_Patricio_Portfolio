import Hero from './sections/Hero'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useRef } from 'react'
import About from './sections/About'

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <NavBar onNavigate={scrollToSection} />
      <Hero />
      <div ref={aboutRef}> <About /> </div>
      <Footer />
    </>
  )
}

export default Home