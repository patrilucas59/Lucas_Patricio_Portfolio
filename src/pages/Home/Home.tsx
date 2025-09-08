import Hero from './sections/Hero'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useRef } from 'react'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import { useTranslation } from 'react-i18next'


const Home = () => {
  const { t } = useTranslation('home');
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar onNavigate={scrollToSection} />
      <Hero title={t('hero.title')} />
      <div ref={aboutRef}><About /> </div>
      <div ref={skillsRef}><Skills />  </div>
      <div ref={projectsRef}><Projects /></div>
      <Footer />
    </>
  )
}

export default Home;
