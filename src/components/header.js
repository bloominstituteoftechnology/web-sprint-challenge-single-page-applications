import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

function HeaderOne(){


    return (
        <div className="headerOne">
            <h1>Pizzaria La Lamda</h1>
            <ul>
                <Link to = "/" > 
                    <Button color="link">Home</Button> 
                </Link>
                
                <Link to = "/about">
                    <Button color="info">About</Button>
                </Link>
            </ul>
     
        </div>
    )


}

export default HeaderOne;