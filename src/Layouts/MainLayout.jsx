import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import App from '../components/App'
import Navbar from '../components/Navbar'

const mainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default mainLayout