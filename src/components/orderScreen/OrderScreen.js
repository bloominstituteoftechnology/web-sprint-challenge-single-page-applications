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
        sauces: [],
        cheese: '',
        meats: [],
        veggies: [],
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
      e.preventDefault()
      postNewPizza()
      setPizzaOrder(initialPizzaState)
      e.target.reset()
    }

    const handleChange = e => {
        const name = e.target.name
        const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value
        if (e.target.type === "checkbox") {
            const topping = name.split(':')
            const topCat = topping[0]
            const topName = topping[1]
            Object.keys(pizzaOrder).forEach((key) =>{
                if (key === topCat && e.target.checked) {
                    pizzaOrder[key].push(topName)
                }
                if (key === topCat && !e.target.checked) {
                   const index = pizzaOrder[key].indexOf(topName)
                   if (index > -1) {
                    pizzaOrder[key].splice(index, 1)
                   }
                }
            })
        } else {
            setPizzaOrder({...pizzaOrder, [name]: value})
        }
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
            name="sauces:Barbecue"
            onChange={handleChange}
          />
        </label>

        <label>Buffalo
          <input
            type="checkbox"
            name="sauces:Buffalo"
            onChange={handleChange}
          />
        </label>

        <label>Marinara
          <input
            type="checkbox"
            name="sauces:Marinara"
            onChange={handleChange}
          />
        </label>

        <label>Alfredo
          <input
            type="checkbox"
            name="sauces:Alfredo"
            onChange={handleChange}
          />
        </label>



        <h4>Cheese:</h4>
        <label>
          <select
            id="cheese"
            name='cheese'
            onChange={handleChange}
          >
            <option >- Select an option -</option>
            <option >Normal</option>
            <option>Extra</option>
            <option >None</option>
          </select>
        </label>




        <h4>Meat:</h4>
        
        <label>Pepperoni
          <input
            type="checkbox"
            name="meats:Pepperoni"
            onChange={handleChange}
          />
        </label>
        <label>Sausage
          <input
            type="checkbox"
            name="meats:Sausage"
            onChange={handleChange}
          />
        </label>
        <label>Anchovies
          <input
            type="checkbox"
            name="meats:Anchovies"
            onChange={handleChange}
          />
        </label>
        <label>Chicken
          <input
            type="checkbox"
            name="meats:Chicken"
            onChange={handleChange}
          />
        </label>

        <h4> veggies</h4>
        
        <label>Mushroom
          <input
            type="checkbox"
            name="veggies:Mushroom"
            onChange={handleChange}
          />
        </label>

        <label>Onion
          <input
            type="checkbox"
            name="veggies:Onion"
            onChange={handleChange}
          />
        </label>

        <label>Black olives
          <input
            type="checkbox"
            name="veggies:BlackOlives"
            onChange={handleChange}
          />
        </label>
        <label>Jalapenos
          <input
            type="checkbox"
            name="veggies:Jalapenos"
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