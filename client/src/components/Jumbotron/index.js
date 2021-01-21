import React from "react";

function Jumbotron() {
  return(
    <div className="jumbotron"
      style={{
        textAlign: 'center'
      }}
    >
      <h1 className="display-4">(React) Google Books Search</h1>
      <p className="lead">Search for and Save Books of Interest</p>
    </div>
  );
}

export default Jumbotron;