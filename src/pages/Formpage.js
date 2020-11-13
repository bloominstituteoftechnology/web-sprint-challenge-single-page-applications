import React from 'react'
import {useHistory} from 'react-router-dom'

function Formpage() {
    let history = useHistory();
    
    function handleClick() {
        history.push("/pizzaOrder/Success");
    }

    return (
        <div>
            <h1>Form here</h1>
            <button type="button" onClick={handleClick}>Place order</button>
        </div>
    )
}

export default Formpage
