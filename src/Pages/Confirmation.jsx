import { useLocation } from "react-router-dom"
// deliveryInfo: {
//     fname: "",
//     lname: "",
//     addresss: "",
//     address2: "",
//     city: "",
//     state: "",
//     zip: "",
// },
// pizzaInfo: {
//     size: "",
//     crust: "",
//     sauce: "",
//     toppings: [],
//     specialInstructions: "",
// },
// orderTotal: "",


export default function Confirmation() {
    const location = useLocation()
    const orderDetails = location.state
    console.log(location)
    const { deliveryInfo, pizzaInfo, orderTotal } = orderDetails

    return (
        <div className="container animate__animated animate__backInLeft">
            <h1 className="text-center">{`Thank you ${deliveryInfo.fname} for your purchase`}</h1>
            <h3 className="text-center">Your Order is on it's way</h3>
            <p>Please look over information</p>
            <div>
                <p className="mb-0">{deliveryInfo.fname} {deliveryInfo.lname}</p>
                <p className="mb-0">{deliveryInfo.address} {deliveryInfo.address2}</p>
                <p>{deliveryInfo.city} {deliveryInfo.state} {deliveryInfo.zip}</p>
            </div>
            <div>
                <p className="mb-0">{pizzaInfo.size}</p>
                <p className="mb-0">{pizzaInfo.crust}</p>
                <p className="mb-0">{pizzaInfo.sauce}</p>
                <p>{pizzaInfo.toppings}</p>
            </div>
            <p className="text-center">Your Total today is ${orderTotal.toFixed(2)}</p>
        </div>
    )
}


