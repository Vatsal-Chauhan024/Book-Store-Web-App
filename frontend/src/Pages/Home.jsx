import React from 'react'
import Banner from '../Components/HomePageComponents/Banner'
import BestSellerBooks from '../Components/HomePageComponents/BestSellerBooks'
import FavouriteBook from '../Components/HomePageComponents/FavouriteBook'
import PromoBanner from '../Components/HomePageComponents/PromoBanner'
import OtherBooks from '../Components/HomePageComponents/OtherBooks'
import Reviews from '../Components/HomePageComponents/Reviews'


const Home = () => {
  return (
    <>
   <div className="">
    <Banner/>
    <BestSellerBooks/>
    <FavouriteBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Reviews/>
   </div>
    </>
  )
}

export default Home
