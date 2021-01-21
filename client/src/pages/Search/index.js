import React, { useState } from 'react'
import BookList from '../../components/BookList';
import SearchBar from "../../components/SearchBar"
export default function Search() {
  const [searchResults, setSearchResults] = useState(null);
  return (
    <div className="container">
      <SearchBar setSearchResults={setSearchResults} />
      {searchResults && (<div className="container card mt-3">
        <h2>Results </h2>
        {searchResults.map(book => (
        <BookList
          title={book.volumeInfo.title} 
          authors={book.volumeInfo.authors.join(", ")} 
          desc={book.volumeInfo.description} 
          image={book.volumeInfo.imageLinks.thumbnail} 
          link={book.volumeInfo.previewLink}
        />))}
      </div>)}
    </div>
  )
}
