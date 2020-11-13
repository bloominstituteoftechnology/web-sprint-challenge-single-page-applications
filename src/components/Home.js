import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const Home = () => {
  return (
    <Styles>
      <div className="bg-img">
        <div className="head">
          <h2>Your favorite food delieverd while coding</h2>

          <button>
            <Link className="link" to="/pizza">
              Order Now{" "}
            </Link>
          </button>
        </div>
      </div>
      {/* <img className="logo" src={img} alt=""></img> */}
    </Styles>
  );
};

const Styles = styles.div`
width:100%;
display: flex;
flex-flow:column;
  justify-content: center;
  margin:auto;
  margin-top:10%;

`;
export default Home;
