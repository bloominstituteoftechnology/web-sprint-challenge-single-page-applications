import React from 'react'
import { useHistory } from 'react-router-dom'



export default function Home(){
      
    const history = useHistory()

    const routeToPizza = () => {
        console.log(history)
        history.push('/orderForm')
    }


    return(
        <div className='homeContainer'>
            <div className='pizzaBackground'>
                <h1>YOUR FAVORITE FOOD DELIVERED WHILE CODING!</h1>
                <button 
                onClick={routeToPizza}
                className='pizzaBtn'>Pizza?</button>
            </div>
            <div className='lowerHome'>

            </div>

        </div>
    )
}