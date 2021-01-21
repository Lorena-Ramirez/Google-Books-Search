import React from 'react'
import API from "../../utils/API";

export default function BookList({title, authors,desc,image,link}) {

  const saveBook = () =>{
    console.log(`SAVING"${title} book`)
    API.saveBook({
      title:title,
      authors:authors,
      description:desc,
      image:image,
      link:link
    }).then(result=>{
        console.log(result)
    }).catch(err=>console.log(err))
  }

  //call API delete function and delete book by id then render new saved books list
  return (
    <div className="container card mt-3">
     <div className="row">
        <div className="col">
          <h3>{title}</h3>
          <h4>{authors}</h4>
        </div >

     <div className="col">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="btn btn-primary"style={{float: "right"}}>
          View 
        </button>
      </a>
      <button className="btn btn-primary" onClick={saveBook} style={{float: "right"}}>
          Save
      </button>
      {/* Create delete button and set onChange to delete function */}
          
     </div >
    </div > 

     <div className="row">
      <div className="col-2">
      <img src={image} alt="book" className="img-thumbnail" />
      </div >
      <div className="col">
        <p>{desc}</p>
      </div >
     </div> 
    
    </div>
  )
}
