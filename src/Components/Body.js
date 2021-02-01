import react from "react";
import PizzaCard from "./PizzaCard";

// Got to import images for 6 PizzaCards'

export default function Body( props ) {
    // return the values of the 6 PizzaCards'
    return (
        <div>
            <h3>Food delivery in Gotham City</h3>
            <div className = "info">
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />
                <PizzaCard
                    name = ""
                    price = ""
                    img = ""
                />                
            </div>
        </div>
    )
};
