import React from 'react'
import BannerSlider from '../BannerSlider/BannerSlider'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 '>
            
                {/*  left side div  */}

                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                    <p className='md:w-4/5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt debitis eos cupiditate iste sit odit nemo asperiores obcaecati! Facere hic adipisci itaque incidunt, totam iusto quae minus error nihil voluptatum!</p>

                    <div>
                        <input type="search" name='search' id='search' placeholder='Search a book' className='p-2 rounded-s-sm outline-none '/>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all duration-300'>Search</button>
                    </div>
                </div>

                <div className="-translate-x-20">
                    <BannerSlider/>
                </div>
            
        </div>
    </div>
  )
}

export default Banner
