import React from 'react'
import Form from "./Form"
import { Link, Route } from "react-router-dom";

function Home() {
    return (
        <div className="link">

            <Link to="/Form">
                <button onClick={(evt)=> evt.preventDefault}>I Want Pizza!!!</button></Link>
            <Route path="/Form">
        <Form />
      </Route>
        </div>
    )
}

export default Home
