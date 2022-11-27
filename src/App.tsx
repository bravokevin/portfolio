import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/home'
import About from './components/about/About'
import Services from './components/services/Services'
import { Resume } from './components/resume/Resume'
import { Porrfolio } from './components/portfolio/Porrfolio'
import { Pricing } from './components/pricing/Pricing'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Porrfolio/>
      <Pricing/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </main>
    </>
  )
}

export default App
