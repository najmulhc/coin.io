import React from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
const App = () => {
  return (
    <div className='min-w-screen min-h-screen bg-base-100'> 
      <Header />
      <Footer /> 
    </div>
  )
}

export default App