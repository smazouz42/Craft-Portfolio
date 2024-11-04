import { AboutMe } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { HomePage } from './HomePage'
import { Projects } from './Projects'
import { Skills } from './Skills'
export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  )
}
