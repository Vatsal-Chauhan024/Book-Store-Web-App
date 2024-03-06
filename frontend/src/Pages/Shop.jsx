import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shop = () => {
  const [books, setbooks] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/all-books").then((response) => {
      const result = response.data;
      setbooks(result);
    })
  }, []);


  console.log


  return (
    <div className="mt-28 px-4 lg:px-24 ">

      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          books.map((element, key) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg relative pb-16" key={key}>
              <img class="w-full aspect-square" src= {element.imageURL} alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{element.bookTitle}</div>
                  <p class="text-gray-700 text-base">
                    {element.bookDescription}
                  </p>
                </div>
                <div class="px-6 absolute bottom-3 right-3">
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all duration-300'>Buy Now</button>
                </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Shop
