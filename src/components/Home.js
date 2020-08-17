import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h2>Hello from Homepage</h2>
      <button>
        <Link to="/pizza"> Place order here!</Link>
      </button>
    </>
  );
};
export default Home;
