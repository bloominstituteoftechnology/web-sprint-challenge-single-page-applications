import React from 'react';
import chickenwings from "./resources/chickenwings.jpg";
import salad from "./resources/salad.jpg";
import sandwich from "./resources/sandwich.jpg";

function wingsNThings(props) {
    return (
      <div
        className="d-flex justify-content-center flex-column"
        style={{ marginTop: "2rem", textAlign: "center" }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>Wings N' Things</h1>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>
            Try some of our tasty, wings, sandwiches, and salads
          </h3>
        </div>
        <div>
          <img
            src={chickenwings}
            className="sizer"
            alt="chicken wings"
            style={{ margin: "1rem" }}
          />
          <img
            src={salad}
            className="sizer"
            alt="chicken wings"
            style={{ margin: "1rem" }}
          />
          <img
            src={sandwich}
            className="sizer"
            alt="chicken wings"
            style={{ margin: "1rem" }}
          />
        </div>
      </div>
    );
  }
  
  export default wingsNThings;