import React from 'react'
import FooterSection from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import DiscountedDeals from '../views/dealsViews/DiscountedDealsViews'
import DiscountedDealData from '../../data/dealData/DiscountedDealData'
import ExclusiveDeals from '../views/dealsViews/ExclusiveDealView'
import ExclusiveDealData from '../../data/dealData/ExclusiveDealData'

const Deals = () => {
  return (
    <>
    <Navbar/>
    <DiscountedDeals deals={DiscountedDealData}/>
    <ExclusiveDeals deals={ExclusiveDealData}/>
    
    <FooterSection/>
    </>
  )
}

export default Deals;