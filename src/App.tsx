import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Portfolio  from './components/portfolio/Porrfolio'
import Blog from './components/blog/Blog'
const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Resume />
        {/* <Portfolio/> */}
        <Blog/>
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
