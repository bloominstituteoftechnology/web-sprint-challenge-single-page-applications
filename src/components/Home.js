import React from 'react';
import { Route, Link } from 'react-router-dom';
import Pizza from './Pizza'

function Home() {
    return (
        <>
            <Link to="/pizza"><button>Search Pizza</button></Link>
            <Route path="/pizza" component={Pizza}></Route>
        </>
    )
}

export default Home;