import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css'
export default function Homepage(){
    const history= useHistory()

    const routeArea = () => {
        history.push('/pizza')
    }

    return (
        <div className='homeDiv'>
            
             <img
             className='pizzaPic'
             src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80'
             alt=''
             />
             <button
             onClick={routeArea}
             className='form-button'
             >
             Hungry? Click Here.    
             </button>
        </div>
    )
}