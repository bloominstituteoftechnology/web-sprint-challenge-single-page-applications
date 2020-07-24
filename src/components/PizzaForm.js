import React, { useState } from 'react'
import PizzaCreator from './PizzaCreator'

export default function PizzaForm(){
    const [ allPizzas, setAllPizzas ] = useState([])

    return (
        <div>
            <PizzaCreator allPizzas={allPizzas} setAllPizzas={setAllPizzas} />
            {allPizzas.map(item => (
                <div key={item.id}>
                    <h3>{item.name} wants a {item.size} pizza</h3>
                    <h2>with:</h2>
                    <p>TOPPINGS - <br/>
                        Peppers: {item.peppers === 'on' ? 'Yes' : 'No'} <br/>
                        Olives: {item.olives === 'on' ? 'Yes' : 'No'} <br/>
                        Onions {item.onions === 'on' ? 'Yes' : 'No'} <br/>
                        Pineapple {item.pineapple === 'on' ? 'Yes' : 'No'}</p>
                    <h2>This needs to be done for their pizza:</h2>
                    <p>{item.special}</p>
                </div>
            ))}
        </div>
    )
}