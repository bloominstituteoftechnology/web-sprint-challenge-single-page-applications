import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Form from './Form'

function Home() {
    return (
        <div>
            <div>
                <h1>Bloomtech Eats</h1>
            </div>
            <div id="Pizza">
                <div className='Btn'>
                    <BrowserRouter>
                    <button className='op'>
                        <Link id="order-pizza" to="/pizza">
                            Order Pizza!
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path="/pizza">
                            <Form />
                        </Route>

                    </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default Home;
