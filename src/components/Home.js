import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-page'>
      <h2>Your favorite food, delivered while coding</h2>
      <Link id='nav-pizza' to='/pizza'>Pizza?</Link>
    </div>
  );
}