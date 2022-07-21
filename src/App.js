import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
const App = () => {
  const taha = useSelector(state => state.currency.value);
  console.log(taha)
  return (
    <div className='min-w-screen min-h-96 bg-base-100'> 
      <Header />
      <div className='min-w-screen min-h-screen'></div>
      <Footer /> 
    </div>
  )
}

export default App