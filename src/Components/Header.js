import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <div>
            <Link to='./'></Link>
            <Link to= './pizza'>Pizza</Link>
        </div>
    )
} 