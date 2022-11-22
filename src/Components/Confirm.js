import React from "react";
function Confirm({ details }) {
    if(!details) {
        return <h2> Working Fetching Your details.. </h2> 
    }
    return ( 
        <div className="pizza-contqainer">
            <h1> Pizza is on its way!!</h1>
            <div className="array">
                <h2>{details.name}</h2>
                <p>Size:{details.size}</p>
                <p>Special:{details.special}</p>
                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}
export default Confirm;