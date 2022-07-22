import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import BasicBlock from './Components/Shared/BasicBlock'
import Home from './Pages/Home/Home'
import Learn from './Pages/Learn/Learn'
import Market from './Pages/Market/Market'
import Portfolio from './Pages/Portfolio/Portfolio'
import TradeHistory from './Pages/TradeHistory/TradeHistory'
import Watchlist from './Pages/Watchlist/Watchlist'
const App = () => {
  const taha = useSelector(state => state.currency.value);
  const menu = useSelector(state => state.menu.value);
  return (
    <div className='min-w-screen min-h-96 bg-base-100'> 
      <Header />
      {menu ? (<MobileMenu />) : (
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/market' element={<Market/> } />
          <Route path='/learn' element={<Learn/> } />
          <Route path='/portfolio' element={<Portfolio/> } />
          <Route path='/trade-history' element={<TradeHistory/> } />
          <Route path='/watchlist' element={<Watchlist/> } />
        </Routes>
      )}
      <Footer /> 
    </div>
  )
}

export default App