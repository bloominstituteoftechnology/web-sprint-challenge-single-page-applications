import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
      <div className='home'>
        <h1>Lambda Eats</h1>
        <p>The only place that Lambdonians choose to eat! </p>

        <Link to={"./Form"}>
          <button>Pizza?</button>
        </Link>
      </div>
    );
}

export default Home;