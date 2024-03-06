import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TableHeadings = [
  "Sr No.", "authorName","bookTitle",  "category","Price", "Action"
]

const ManageBook = () => {

const [books, setBooks] = useState([])

useEffect(() => {
    axios.get("http://localhost:5000/all-books").then((response) => {
      const result = response.data;
      setBooks(result)
    })
  }, [books])


const handleDelete =  (_id) => {
    axios.delete(`http://localhost:5000/book/${_id}`).then(()=> {
      alert("Book is Successfully Deleted!!")
    }).catch((error)=> {
      alert("There is error in deleting Book!!")
    })
}


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      <div className="flex flex-col w-[70vw]">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    {
                      TableHeadings.map((element, key) => (
                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase" key={key}>{element}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {
                    books.map((book, key) => (
                      <tr key={key} className='odd:bg-black/10'>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{key}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.authorName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.bookTitle}</td>                      
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{book.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">10.00$</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <Link to = {`/admin/dashboard/edit-books/${book._id}`}>
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-2">Edit</button>
                          </Link>
                          <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-md' onClick={()=> handleDelete(book._id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageBook
