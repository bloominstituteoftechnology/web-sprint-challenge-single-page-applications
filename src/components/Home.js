import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home() {
    const history = useHistory()

    const routeToOrderForm = () => {
        console.log(history)
        history.push('/Form.js')
    }
    
    return (
        <div className = 'homeContainer'>
            <img
            className = 'home-image'
            src = '../Assets/Pizza.jpg'
            alt = 'pizzaImg' />
            <button
                onClick = {routeToOrderForm}
                className = 'orderBtn'>
                ORDER NOW
            </button>
        </div>
    )

}