import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Form from './Form'
import '../App.css'

const dfr = Math.round(Math.random(5) +  1.50);

function Home() {

    return (
        <div>
            <div>
                <h1>Bloomtech pizza</h1>
            </div>
            <div id="Pizza">
                <div className="Button">
                    <BrowserRouter>
                        <button className="move"> <Link id="order-pizza" to="/pizza">order-Pizza</Link> </button>
                        <Switch>
                            <Route exact path="/pizza" >
                                <Form />
                            </Route>
                        </Switch>
                    </BrowserRouter>

                    </div>

                </div> 
                <div id="aline">

                     <div id="orderCity">
                     <label id='label'> Order from Saint Pete</label>
                     <div className='places1'/>
                    <h2>Mcdonalds <button id="mcd">Order!</button>
                    <button id="df">`Delivery fee is ${dfr}`</button> 
                    </h2>
                     <div className='places2'/>
                     <h2>WaWa <button id="wawa">Order!</button>
                     <button id="df">`Delivery fee is ${dfr}`</button> 
                     </h2>
                    <div className='places3'/>
                    <h2>StarBucks <button id='sb'>Order!</button>
                    <button id="df">`Delivery fee is ${dfr}`</button> 
                    </h2>
                </div>
            </div>
</div>
    )
}

export default Home