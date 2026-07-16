import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import { NavBar } from './Components/NavBar'
import { Hero } from './Components/Hero'

function App() {
 

  return (
    <>
    <NavBar/>
    <Hero/>
    </>
  )
}

export default App;
