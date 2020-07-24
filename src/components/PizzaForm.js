import React, { useState } from 'react'
import PizzaCreator from './PizzaCreator'

export default function PizzaForm(){
    const [ allPizzas, setAllPizzas ] = useState([])

    return (
        <div>
            <PizzaCreator allPizzas={allPizzas} setAllPizzas={setAllPizzas} />
            {allPizzas.map(item => (
                <div key={item.id}>
                    <h1>{item.name} wants a {item.size} pizza</h1>
                    <h2>with:</h2>
                    <p>TOPPINGS - <br/>
                        Peppers:    {item.peppers === 'on' ? 'YES' : 'NO'} <br/>
                        Olives: {item.olives === 'on' ? 'YES' : 'NO'} <br/>
                        Onions: {item.onions === 'on' ? 'YES' : 'NO'} <br/>
                        Pineapple:  {item.pineapple === 'on' ? 'YES' : 'NO'}</p>
                    <h2>This needs to be done for their pizza:</h2>
                    <p>{item.special}</p>
                </div>
            ))}
        </div>
    )
}