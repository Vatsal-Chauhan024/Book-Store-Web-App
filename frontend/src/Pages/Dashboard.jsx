import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from "../Context/AuthProvider"
import { Link } from 'react-router-dom'
import axios from "axios"





const Dashboard = () => {

  useEffect(() => {
    axios.get("http://localhost:5000/all-books").then((response) => {
      const result = response.data
      setTotalBooks(result.length)
    }).catch((error) => {
      console.log(error)
    })
  })


  const DashboardCardData = [
    {
      itemsTitle: "Upload Book",
      itemsLink: "/admin/dashboard/upload",
      buttonValue: "Upload Book"
    },
    {
      itemsTitle: "Manage Book",
      itemsLink: "/admin/dashboard/manage",
      buttonValue: "ManageBook"
    }
  ]





  const { user } = useContext(AuthContext)
  const value = user.email.split('.')[0]
  const [totalBooks, setTotalBooks] = useState(null)

  return (
    <div className='px-4'>

      <h1 className='text-4xl sm:text-5xl text-black capitalize mt-16'>Hello <span className='text-blue-700'>{value}</span></h1>
      <hr className='w-[70vw]' />

      <div className="w-full mt-16">
        <div className={`max-w-72 w-full h-28  rounded px-2 py-4 mx-auto bg-indigo-500 flex flex-col gap-3 items-center justify-center`}>
          <h2 className=' text-white leading-snug text-center text-2xl w-full '>Total Books</h2>
          <span className=' text-white leading-snug text-center text-lg w-full  '>{totalBooks}</span>
        </div>
      </div>


      <h1 className='text-4xl sm:text-5xl text-black capitalize mt-24'>Explore <span className='text-blue-700'>More</span></h1>
      <hr className='w-[70vw]' />


      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mt-16'>
        {
          DashboardCardData.map((element, key) => (
            <div className={`relative max-w-72 w-full h-28  rounded px-2 py-4 above-card z-20 ${key === 0 ? "bg-lime-500" : "bg-purple-500"}`} key={key}>
              <h2 className=' text-white leading-snug text-center text-2xl w-full mt-4 '>{element.itemsTitle}</h2>
              <div className="absolute below-card bottom-0 right-0 left-0">
                <Link to={element.itemsLink} className='button-link absolute bottom-9 left-0'>
                  <button className='px-6 py-1 text-white rounded bg-black text-sm'>{element.buttonValue}</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
