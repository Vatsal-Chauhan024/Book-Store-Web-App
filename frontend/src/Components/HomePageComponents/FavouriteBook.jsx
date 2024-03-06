import React from 'react'
import favBook from "../../assets/favoritebook.jpg"
import {Link} from "react-router-dom"

const FavouriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className="md:w-1/2">
        <img src={favBook} alt="error-book-icon" className='rounded md:w-10/12 '/>
      </div>


      <div className="md:w-1/2 space-y-6 ">
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your favorite <span className='text-blue-700'>Book here</span></h2>

        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, laborum? Reiciendis modi vero magnam ut error. Ab exercitationem laudantium in.</p>

        <div className='flexx flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Register User</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>PDF Download</p>
            </div>
        </div>

        <Link to ="/shop">
        <button className='mt-7 bg-blue-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-black transition-all duration-300'>Explore</button>
        </Link>

      </div>
    </div>
  )
}

export default FavouriteBook
