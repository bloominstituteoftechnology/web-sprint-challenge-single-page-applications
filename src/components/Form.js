import React from 'react'
import { Route, Link, useRouteMatch } from 'react-router-dom'

export default function Form() {
    return(
        <>
        <h1>Build Your Own Pizza</h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHH9dtENUkufgfi_jz-quw_b5lHbgSFbn3_g&usqp=CAU' />
        <p>Choice of Size</p>
        <p>Choice of Sauce</p>
        <p>Add Toppings</p>       
        <p>Special Instructions</p>
        <button>Add to Order</button>


        <Route path='/pizza'>
          <Pizza />
        </Route>
        </>
    )
}