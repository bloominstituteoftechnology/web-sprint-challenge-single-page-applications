import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import './App.css';
import PizzaForm from './PizzaForm.js'


function HomePage() {






    return (
        <div>
            <div>

                <h1>Lambda Pizza</h1>
            </div>
            <div id="Pizza">
                <div className="Button">
                    <BrowserRouter>
                        <button className="move"> <Link id="order-pizza" to="/pizza">order-Pizza</Link> </button>
                        <Switch>
                            <Route exact path="/pizza" >
                                <PizzaForm />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>


            </div>


        </div>

    )
}

export default HomePage