import React from 'react'
import About from './components/about'
import Hero from './components/hero'
import Contact from './components/Contact'
import './dist/css/main.css'
import Projects from './components/Projects/index'
import './App.scss'

const App = () => {
  return (
    <div className="Parallax">
    <Hero/>
    <About/>
    <Projects/>
    <Contact/> 
    </div>
  )
}

export default App

