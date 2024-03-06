import React, { useEffect, useState } from 'react'
import BookCards from './BookCards'
import axios from 'axios'

const OtherBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:5000/all-books").then((res)=> {
            const results = res.data
            setBooks(results)
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

  return (
    <div>
      <BookCards books = {books} headline = "Best Seller Books" />
    </div>
  )
}

export default OtherBooks
