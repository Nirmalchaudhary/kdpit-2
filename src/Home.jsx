import React from 'react'
import Video from './components/Video'
import About from './components/About'
import BestPractices from './components/BestPractices'
import Club from './components/Club'
import Goal from './components/Goal'
import Certification from './components/Certification'
import Career from './components/Career'
import Faculty from './components/Faculty'
import StudentChapter from './components/StudentChapter'
import Gallery from './components/Gallery'
import Recuiters from './components/Recuiters'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Experiment from './components/Experiment'

const Home = () => {
  return (
    <>
   <Video/>
   <About/>
   <BestPractices/>
   <Club/>
   <Goal/>
   <Certification/>
   <Career/>
   <Faculty/>
   <StudentChapter/>
   <Gallery/>
   <Recuiters/>
   <Testimonials/>
   <Contact/>
   {/* <Experiment/> */}
    </>
  )
}

export default Home
