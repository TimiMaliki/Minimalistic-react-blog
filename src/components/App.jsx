import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Client from './Client'
import Service from './Service'
import HomeBlog from './HomeBlog'

const App = () => {
  return (
    <div className='w-full h-full'>
        <HeroSection/>
        <About/>
        <Service/>
        <Client/>
        <HomeBlog/>

    </div>
  )
}

export default App