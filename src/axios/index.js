import { v4 as uuid } from 'uuid';

const pizzaOrder = [
    {
      id: uuid(),
      size: 'Small',
      sauce: 'Orignal Red',
      toppings: [
        'Pepperoni',
        'Canadian Bacon',
        'Grilled Chiken',
        'Green Pepper',
        'Black Olives',
        'Artichoke Hearts',
        'Pinepple',
        'Sausage',
        'Spicy Italian Sausage',
        'Onions',
        'Diced Tomatos',
        'Roasted Garlic',
        'Three Cheese',
        'Extra Cheese',
      ],
      specialInstc: 'Any speical instructions goes here', 
      name: 'Ashish',
      email: 'ashish@ashish.com',
      streetName: '123 Main Street',
      city: 'Frankfort',
      zipcode: '90210',
      numberOfOrder: 1
    },
  ]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: pizzaOrder })
  },
  post(url, { size, sauce, toppings, specialInstc, name, email, streetName, city, zipcode, numberOfOrder }) {
    const newPizzaOrder = { id: uuid(), size, sauce, toppings, specialInstc, name, email, streetName, city, zipcode, numberOfOrder }
    return Promise.resolve({ status: 200, success: true, data: newPizzaOrder })
  }
}