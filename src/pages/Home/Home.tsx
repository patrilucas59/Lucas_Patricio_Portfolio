import Hero from './sections/Hero'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useRef } from 'react'
import About from './sections/About'
import Skills from './sections/Skills'

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <NavBar onNavigate={scrollToSection} />
      <Hero />
      <div ref={aboutRef}><About /> </div>
      <div ref={skillsRef}><Skills />  </div>
      <Footer />
    </>
  )
}

export default Home