import React, { useState } from "react";
import API from "../../utils/API";
import Button from "../Button"
function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    console.log("You searched for ", searchTerm);
    await API.searchBooks(searchTerm)
      .then(resp =>{
        console.log(resp)
        setSearchResults(resp?.data?.items)
      })
  }
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Search for a Book!</h3>
      <div className="input-group input-group-lg">
        <input value={searchTerm} className="form-control" type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <Button children="Search" onClick={() => handleSearch()} />
      </div>
    </div>
  );
}

export default SearchBar;
