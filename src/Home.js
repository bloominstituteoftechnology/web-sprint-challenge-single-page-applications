import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <h1>Lambda Eats</h1>
      <p>For some reason, we only serve pizza</p>
      <Link to='/pizza'>
        <button>Order a Pizza</button>
      </Link> 
        </>
    )
}
export default Home;