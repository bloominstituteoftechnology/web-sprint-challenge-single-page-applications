import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form() {
    const history = useHistory()
    const routeToForm = () => {
        console.log('going to form')
        history.push('/form')
    }
    return(
        <div className='homeContainer'>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ye68MxcWs4pHKOnv5Z1AbcIZ_n-C1Z8wtg&usqp=CAU' 
                alt=''
            />
            <button 
                onClick={routeToForm}
                className='orderButton'
            >
            Order Now!   
            </button>
        </div>
    )
}