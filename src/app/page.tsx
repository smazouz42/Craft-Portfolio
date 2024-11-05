import { AboutMe } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/HomePage'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <>
      <HomePage />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}
