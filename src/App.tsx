import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume'
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Blog from './components/blog/Blog'
import Portfolio from './components/portfolio/Portfolio'

import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Blog/>
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
