import React from 'react'
import Hero from '../Component/Element/Hero'
import TopSelling from '../Component/Element/TopSelling'
import NewArrivals from '../Component/Element/NewArrivals'
import HotDeals from '../Component/Element/HotDeals'
import Reviews from '../Component/Element/Reviews'
import Brand from '../Component/Element/Brand'

const Home = () => {
  return (
    <div >
      <Hero />
      <TopSelling />
      <NewArrivals />
      <HotDeals />
      <Brand />
      <Reviews />
    </div>
  )
}

export default Home
