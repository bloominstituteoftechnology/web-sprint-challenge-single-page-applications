import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Try out our new pizza builder!</h2>
            <Link to='/pizza'>
                <button>Build Pizza</button>
            </Link>
        </div>
    );
};
export default Home;
