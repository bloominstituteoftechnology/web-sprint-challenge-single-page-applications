import React from "react";
import img from "../Assets/Pizza.jpg";
import styles from "styled-components";

const Home = () => {
  return (
    <Styles>
      <div className="bg-img">
        <div className="head">
          <h2>Your favorite food delieverd while coding</h2>
          <button>Pizza?</button>
        </div>
      </div>
      {/* <img className="logo" src={img} alt=""></img> */}
    </Styles>
  );
};
// const Button = styles.button`
// width:20%;
// display:flex;
// justify-content:center;
// margin:auto;

// padding:1.5%;
// border:2px solid black;
// `;

// const Bg = styles.div`
// height:50vh;
// display:flex;
// `;

const Styles = styles.div`
width:100%;
display: flex;
flex-flow:column;
  justify-content: center;
  margin:auto;
  border:2px solid purple;
  
  
`;
export default Home;
