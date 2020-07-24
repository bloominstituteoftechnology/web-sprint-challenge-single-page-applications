import React, { useState } from 'react'
import PizzaCreator from './PizzaCreator'

export default function PizzaForm(props){
    const [ allPizzas, setAllPizzas ] = useState([])
    return (
        <div>
            <PizzaCreator allPizzas={allPizzas} setAllPizzas={setAllPizzas} />
        </div>
    )
}