import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'


function App() {
  return (
    <div>
      <Nav />

      <div>
        <Route path="/pizza" render={() => <PizzaForm />} />
      </div>
      <Route exact path="/" render={() => <Home />} />
    </div>
  )
}

export default App
