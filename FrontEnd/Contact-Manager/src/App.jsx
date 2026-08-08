import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import { NavBar } from './Components/homePageComponents/NavBar'
import { Hero } from './Components/homePageComponents/Hero'
import { Stats } from './Components/homePageComponents/Stats'
import SignUpPage from './pages/SignUpPage'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App;
