import React from "react";
import { useHistory } from "react-router-dom";
export default function Home (){
    const history= useHistory();
    const pizzaRoute = (event) => {
        setTimeout(() => {
          history.push("/Pizza");
        }, 1000);
    };
    return (
        (
            <div>
                <img
                    src="https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200.jpg"
                />
                <button onClick={pizzaRoute}>
                    Shop now!
                </button>
            </div>
        )
        
    )
}