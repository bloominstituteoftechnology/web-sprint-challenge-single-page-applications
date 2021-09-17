import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'
 
export default function Home(){
const history = useHistory()
 
const routeToForm = () => {
   history.push('/pizza')
}
 
return (
   <div className='home-wrapper'>
   <h1>Lambda Eats</h1>
       <img
        className='home-image'
        src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
       alt=''
       />
       <button
       onClick={routeToForm}
       className="form-button"
       >
       Pizza?
       </button>
   </div>
)
 
}
