import react from "react";
import { Link } from 'react-router-dom';

export default function NavBar ( props ) {

    return (
        <div className = "NavBar">
            <h2>Lambda Pizza</h2>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/order">Order</Link> 
            </nav>
        </div>
    ) 
}