import React from 'react'
import Carosuel from './components/views/homeViews/Carosuel'
import TopSeller from './components/views/homeViews/TopSeller'
import BreakfastProducts from './components/views/homeViews/BreakfastProducts'
import YoungPeopleBuy from './components/views/homeViews/YoungPeopleBuy'
import FooterSection from './components/views/homeViews/Footer'

const App = () => {
  return (
    <>
   
      <Carosuel/>
      <TopSeller/>
      <BreakfastProducts/>
      <YoungPeopleBuy/>
      <FooterSection/>
    </>
  )
}

export default App
