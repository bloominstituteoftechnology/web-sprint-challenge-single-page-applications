import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function HomePage() {
    return (
        <div>
            <Link to="/pizza">Click Here to order pizza</Link>
        </div>
    )
}

export default HomePage