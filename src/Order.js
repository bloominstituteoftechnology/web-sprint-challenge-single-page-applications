import React from 'react'

export default function Order(details) {
    return (
        <div className='container'>
            <h1>Name: {details.name}</h1>
            <p>Email: {details.email}</p> 
        </div>
    )
}
