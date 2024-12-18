import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,

} from 'reactstrap';

const personal = 'Personal 6"'
const medium = 'Medium 8"'
const large = 'Large 12"'
const family = 'Family 16"'

const pricingTable = {
    [personal]: 5.00,
    [medium]: 10.00,
    [large]: 15.00,
    [family]: 20.00,
}

const pizzaSizes = [
    personal,
    medium,
    large,
    family,
]

const crustTypes = [
    "Thin",
    "Hand Tossed",
    "Pan",
    "Stuffed",
    "Gluten Free",
]

const sauceTypes = [
    "Robust Tomato Sauce",
    "Hearty Marinara",
    "Honey BBQ",
    "Alfredo Sauce",
    "Ranch",

]

const allToppings = [
    { name: "Pepperoni", checked: false },
    { name: "Onion", checked: false },
    { name: "Bacon", checked: false },
    { name: "Beef", checked: false },
    { name: "Bell Pepper", checked: false },
    { name: "Tomatoes", checked: false },
    { name: "Sausage", checked: false },
    { name: "Black Olives", checked: false },
    { name: "Mushrooms", checked: false },
    { name: "Italian Sausage", checked: false },
    { name: "Green Olives", checked: false },
    { name: "Spinach", checked: false },
    { name: "Ham", checked: false },
    { name: "Jalapenos", checked: false },
    { name: "Feta Cheese", checked: false },
    { name: "Chicken", checked: false },
    { name: "Banana Peppers", checked: false },
    { name: "Pineapple", checked: false },

]



export default function OrderForm() {

    const navigate = useNavigate()
    const [toppings, setToppings] = useState(allToppings)
    const [orderDetails, setOrderDetails] = useState({
        deliveryInfo: {
            fname: "",
            lname: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
        },
        pizzaInfo: {
            size: "",
            crust: "",
            sauce: "",
            toppings: [],
            specialInstructions: "",
        },

    })

    const { deliveryInfo, pizzaInfo } = orderDetails

    const orderTotal = pricingTable[pizzaInfo.size] ?? 0

    const checkBoxHandler = e => {

        const targetIndex = Number(e.target.getAttribute("data-topping-index"))
        const topping = allToppings[targetIndex]
        const toppingAlreadyAdded = pizzaInfo.toppings.includes(topping.name)

        if (!toppingAlreadyAdded) {

            if (pizzaInfo.toppings.length === 5) {
                return
            }
            else {
                setOrderDetails({ ...orderDetails, pizzaInfo: { ...pizzaInfo, toppings: [...orderDetails.pizzaInfo.toppings, topping.name] } })
            }
        }
        else {
            const newToppings = [...orderDetails.pizzaInfo.toppings]
            const indexToRemove = pizzaInfo.toppings.indexOf(topping.name)
            newToppings.splice(indexToRemove, 1)

            setOrderDetails({ ...orderDetails, pizzaInfo: { ...pizzaInfo, toppings: newToppings } })
        }

        const updatedToppings = toppings.map((topping, index) => {
            if (index === targetIndex) {
                return { ...topping, checked: !topping.checked }
            }
            else {
                return topping
            }
        })
        setToppings(updatedToppings)
    }

    const changeHandler = event => {
        console.log("input changed", event.target.name)
        const deliveryInputs = Object.keys(deliveryInfo)
        // const pizzaInputs = Object.keys(pizzaInfo)
        const isDeliveryInput = deliveryInputs.includes(event.target.name)
        // const isPizzaInput = pizzaInputs.includes(event.target.name)
        if (isDeliveryInput === true) {
            setOrderDetails({ ...orderDetails, deliveryInfo: { ...orderDetails.deliveryInfo, [event.target.name]: event.target.value } })
        }
        else {
            let newDetails = { ...orderDetails, pizzaInfo: { ...orderDetails.pizzaInfo, [event.target.name]: event.target.value } }


            setOrderDetails(newDetails)
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/Confirmation", { state: { ...orderDetails, orderTotal } })
    }

    return (
        <div className="container">
            <h2 className="text-center">Delivery Information</h2>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="fname">
                                First Name
                            </Label>
                            <Input
                                id="fname"
                                name="fname"
                                type="text"
                                value={deliveryInfo.fname}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lname">
                                Last Name
                            </Label>
                            <Input
                                id="lname"
                                name="lname"
                                type="text"
                                value={deliveryInfo.lname}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">
                        Address
                    </Label>
                    <Input
                        id="address"
                        name="address"
                        placeholder="1234 Main St"
                        value={deliveryInfo.address}
                        onChange={changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address2">
                        Address 2
                    </Label>
                    <Input
                        id="address2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                        value={deliveryInfo.address2}
                        onChange={changeHandler}
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="city">
                                City
                            </Label>
                            <Input
                                id="city"
                                name="city"
                                value={deliveryInfo.city}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="state">
                                State
                            </Label>
                            <Input
                                id="state"
                                name="state"
                                value={deliveryInfo.state}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="zip">
                                Zip
                            </Label>
                            <Input
                                id="zip"
                                name="zip"
                                value={deliveryInfo.zip}
                                onChange={changeHandler}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <h2 className='text-center'>Create Your Pizza</h2>

                <h5 className='mb-0'>Size</h5>
                <FormGroup>
                    <Label for="selectSize">
                        Required *
                    </Label>
                    <Input
                        id="selectSize"
                        name="size"
                        type="select"
                        value={pizzaInfo.size}
                        onChange={changeHandler}
                    >
                        <option>
                            -- Choose Pizza Size --
                        </option>
                        {pizzaSizes.map(pizzaSize => {
                            return (<option>
                                {pizzaSize}
                            </option>)
                        })}
                    </Input>
                </FormGroup>

                <h5 className='mb-0'>Crust</h5>
                <FormGroup>
                    <Label for="selectCrust">
                        Required *
                    </Label>
                    <Input
                        id="selectCrust"
                        name="crust"
                        type="select"
                        value={pizzaInfo.crust}
                        onChange={changeHandler}
                    >
                        <option>
                            -- Choose Pizza Crust --
                        </option>
                        {crustTypes.map(crustType => {
                            return (
                                <option>
                                    {crustType}
                                </option>
                            )
                        })}
                    </Input>
                </FormGroup>

                <h5 className='mb-0'>Sauce</h5>
                <FormGroup>
                    <Label for="selectSauce">
                        Required *
                    </Label>
                    <Input
                        id="selectSauce"
                        name="sauce"
                        type="select"
                        value={pizzaInfo.sauce}
                        onChange={changeHandler}
                    >
                        <option>
                            -- Choose Sauce --
                        </option>
                        {sauceTypes.map(sauceType => {
                            return (
                                <option>
                                    {sauceType}
                                </option>
                            )
                        })}
                    </Input>
                </FormGroup>

                <h5 className='mb-0'>Select Toppings</h5>
                <legend className='small'>
                    choose up to 5
                </legend>
                <FormGroup tag="fieldset">
                    <Row>
                        {toppings.map((topping, index) => {
                            return (<Col md={4}>
                                <FormGroup check>
                                    <Input
                                        name="toppings"
                                        type="checkbox"
                                        checked={topping.checked}
                                        onChange={checkBoxHandler}
                                        data-topping-index={index}
                                    />
                                    {' '}
                                    <Label check>
                                        {topping.name}
                                    </Label>
                                </FormGroup>
                            </Col>)
                        })}

                    </Row>
                </FormGroup>

                <FormGroup>
                    <Label for="textArea">
                        Special Instuctions
                    </Label>
                    <Input
                        id="textArea"
                        name="specialInstructions"
                        type="textarea"
                        value={pizzaInfo.specialInstructions}
                        onChange={changeHandler}
                    />
                </FormGroup>

                <Row>
                    <Col className='d-flex text-start align-items-center'>
                        <h5 className='me-2'>Total</h5>
                        <FormGroup className='input-group'>
                            <span class="input-group-text">$</span>
                            <Input
                                type='text'
                                value={orderTotal.toFixed(2)}
                                onChange={changeHandler}
                                readOnly
                            />
                        </FormGroup>
                    </Col>
                    <Col className='text-end'>

                        <Button>
                            Submit Order
                        </Button>

                    </Col>
                </Row>
            </Form>
        </div >
    )
}



