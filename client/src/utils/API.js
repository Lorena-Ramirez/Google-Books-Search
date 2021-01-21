import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(searchTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
  },
  getBooks:function(){
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

  // add delete key that takes in id 
  
};
