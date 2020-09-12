import React from "react";
import { Link, Route } from "react-router-dom";
import Header from "./header";
import Form from "./Form";


export default function HomePage() {
    return(
        <>
        <Header>
            <h1 className="Lambda-pageName">Lambda Eats</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/pizza">Oder Pizza Here</Link>
            </div>
        </Header>
        <Route path="/pizza">
            <Form />
        </Route>
        </>
    )
}