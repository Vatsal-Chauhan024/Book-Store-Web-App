import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCards from './BookCards';

const BestSellerBooks = () => {

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

export default BestSellerBooks;
