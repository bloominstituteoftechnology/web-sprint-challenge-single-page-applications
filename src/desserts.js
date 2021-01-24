import React from 'react';
import dessert from "./resources/dessert.jpg";

// Navigable page No data involved 
/****************************************************************************/


function desserts(props) {
    return (
      <div
        className="d-flex justify-content-center flex-column"
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <h1 style={{ textAlign: "center" }}>House Made Desserts</h1>
        <h3 style={{ textAlign: "center" }}>
          Sample our Fantastic Dessert Selection
        </h3>
        <img
          src={dessert}
          className="sizer"
          alt="one"
          style={{ margin: "5rem auto" }}
        />
      </div>
    );
  }
  
  /*****************************************************************************/
  
  



export default desserts;