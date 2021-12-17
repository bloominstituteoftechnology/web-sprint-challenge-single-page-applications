import React, { useState, useEffect } from 'react'
import formSchema from './formSchema'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import './styles.css'

const OrderScreen = () => {
    const history = useHistory()
    // console.log('YOU ARE HERE', history.location.pathname)
    const initialPizzaState = {
        name: '',
        size: '',
        Barbecue: false,
        Buffalo: false,
        Marinara: false,
        Alfredo: false,
        
        Pepperoni: false,
        Sausage: false,
        Anchovies: false,
        Chicken: false,
        Mushroom: false,
        Onion: false,
        Jalapenos: false,
        BlackOlives: false,
        specialText: ''
    }
    const [pizzaOrder, setPizzaOrder]= useState(initialPizzaState)
    const [error, setError] = useState({})
    const [cart, setCart] = useState([])
    const [orderSuccess, setOrderSuccess] = useState(false)

    useEffect(() => {
      if (orderSuccess && cart.length < 1) {
        cart.push(pizzaOrder)
    } else {
        setCart([...cart, pizzaOrder])
    }
    }, [orderSuccess])

    const postNewPizza =()  => {
      axios.post('https://reqres.in/api/orders', pizzaOrder)
        .then(res => {
          setPizzaOrder(res.data);
          setOrderSuccess(true)
        }).catch(err => {
          console.error(err);
        })
    }

    const onSubmit = e => {
      console.log('ORDER', pizzaOrder)
      e.preventDefault()
      postNewPizza()
      setPizzaOrder(initialPizzaState)
      e.target.reset()
    }

    const handleChange = e => {
        const name = e.target.name
        const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value
      setPizzaOrder({...pizzaOrder, [name]: value})
        if (name === 'name' && value.length < 2) {
            formSchema.validate(pizzaOrder).then(value => {
               }).catch(err => {
                 const errorObj = {
                   message: err.message,
                   path: err.path
                 }
                 setError(errorObj)
               })
        }
        if (name === 'name' && value.length > 2) {
            setError({})
        }
    }
    
    return ( 
     <form id= "pizza-form" onSubmit={onSubmit}>
        <label >Build Your Pizza:</label>

        <input
            id="name-input"
            type="text"
            name="name"
            maxLength="30"
            placeholder="First Name"
            onChange={handleChange}
        />
        {
            error && error.path === 'name' ?
            <div className="error">{error.message}</div> : null
        }

        <label>Size
          <select
            id="size-dropdown"
            name='size'
            onChange={handleChange}
          >
            <option >- Select an option -</option>
            <option >Personal</option>
            <option>Small</option>
            <option >Medium</option>
            <option >Large</option>
            <option >Extra-Large</option>
          </select>
        </label>

        <h4>Toppings</h4>
        <h4>Sauce:</h4>

        <label>Barbecue
          <input
            type="checkbox"
            name="Barbecue"
            onChange={handleChange}
          />
        </label>

        <label>Buffalo
          <input
            type="checkbox"
            name="Buffalo"
            onChange={handleChange}
          />
        </label>

        <label>Marinara
          <input
            type="checkbox"
            name="Marinara"
            onChange={handleChange}
          />
        </label>

        <label>Alfredo
          <input
            type="checkbox"
            name="Alfredo"
            onChange={handleChange}
          />
        </label>



        




        <h4>Meat:</h4>
        
        <label>Pepperoni
          <input
            type="checkbox"
            name="Pepperoni"
            onChange={handleChange}
          />
        </label>
        <label>Sausage
          <input
            type="checkbox"
            name="Sausage"
            onChange={handleChange}
          />
        </label>
        <label>Anchovies
          <input
            type="checkbox"
            name="Anchovies"
            onChange={handleChange}
          />
        </label>
        <label>Chicken
          <input
            type="checkbox"
            name="Chicken"
            onChange={handleChange}
          />
        </label>

        <h4> veggies</h4>
        
        <label>Mushroom
          <input
            type="checkbox"
            name="Mushroom"
            onChange={handleChange}
          />
        </label>

        <label>Onion
          <input
            type="checkbox"
            name="Onion"
            onChange={handleChange}
          />
        </label>

        <label>Black olives
          <input
            type="checkbox"
            name="BlackOlives"
            onChange={handleChange}
          />
        </label>
        <label>Jalapenos
          <input
            type="checkbox"
            name="Jalapenos"
            onChange={handleChange}
          />
        </label>

        <input
            id="special-text"
            type="text"
            size="35"
            name="specialText"
            placeholder=" Any special requests or delivery instructions:"
            onChange={handleChange}
        />

        <input id="order-button" type="submit" value="Add to Order" />

        
     </form>
    )
}

export default OrderScreen