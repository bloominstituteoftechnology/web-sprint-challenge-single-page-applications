import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h2>Your favorite food, delivered while coding</h2>
            <Link to="/pizza">
                <button>Pizza?</button>
            </Link>
        </div>
    )
}
