import React, { useState, useEffect } from 'react'
import BookList from '../../components/BookList';
import API from "../../utils/API";

export default function Saved() {
  const [savedBooks,setSavedBooks] = useState([]);

    useEffect(()=>{
      loadBooks();
    },[])

    function loadBooks(){
      API.getBooks()
       .then(res=>{
           console.log("LOAD BOOKS FUNCTION " + res.data)
           setSavedBooks(res.data)
       })
       .catch(err=>console.log(err))
    }

  return (
    <div className="container">
      <div className="container card mt-3">
        <h2>Saved Books </h2>
        {savedBooks.length===0 ?(<div></div>):(
          savedBooks.map((book)=>{
            return(
              <BookList
              key={book.id}
              title={book.title} 
              authors={book.authors} 
              desc={book.description} 
              image={book.image} 
              link={book.link}
              />
            )
          }))
        }
      </div>
    </div>
  )
}
