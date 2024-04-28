import React from 'react'
import Banner from '../components/Banner'
import Tshirtprinting from '../components/Tshirtprinting'
import Collection from '../components/Collection'
import FeaturedProduct from '../components/FeaturedProduct'
import ExtraSale from '../components/ExtraSale'
import Offer from '../components/Offer'
import ExploreDesign from '../components/ExploreDesign'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import ArticleDaliy from '../components/ArticleDaliy'
import BestTshirt from '../components/BestTshirt'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Tshirtprinting/>
      <Collection/>
      <FeaturedProduct/>
      <ExtraSale/>
      <Offer/>
      <ExploreDesign/>
      <Testimonial/>
      <Services/>
      <ArticleDaliy/>
      <BestTshirt/>
    </div>
  )
}

export default Home