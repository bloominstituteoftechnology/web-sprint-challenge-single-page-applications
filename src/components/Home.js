import React from 'react'
import { Link } from "react-router-dom"

export default function Home(props){
    return(
        <>
        <div>
            <h1>LAMBDA PIZZERIA</h1>
            <h2>
                Come get your Pizza!
            </h2>
            <nav>
                <Link to ="/">
                    <button>Home</button>
                    </Link>
            </nav>
        </div>
        <div>
            <h4>Waiting Pizza is! Yoda qoute of the day</h4>
            <Link to = "/pizza">
                <button>Pizza</button>
                </Link>
        </div>
        </>
    )
}