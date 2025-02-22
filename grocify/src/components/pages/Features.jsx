import React from 'react'
import FeaturesData from '../../data/FeaturesData'
import Navbar from '../Layout/Navbar'
import FooterSection from '../Layout/Footer'
import Feature from '../views/featureViews/Feature'

const Features = () => {
  return (
    <>
       <Navbar/>
      <Feature featuredata={FeaturesData}  />
      <FooterSection/>
    </>
  )
}

export default Features