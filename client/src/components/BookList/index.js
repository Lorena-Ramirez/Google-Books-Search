import React from 'react'

export default function BookList({title, authors,desc,image,link}) {
  return (
    <div className="container card">
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
