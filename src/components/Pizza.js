import React from 'react'

export default function Pizza({ details }) {
    if (!details) {
        return <h3>Working fetching your pizza&apos;s details...</h3>
    }

    return (
        <div className='pizza container'>
            <h2>{details.username}</h2>
            <p>size: {details.size}</p>
            <p>special: {details.special}</p>

        </div>
    )
}
