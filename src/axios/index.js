import {v4 as uuidv4} from 'uuid'; 

const orderPreferences = [ 
    { 
        id: uuidv4()    // generates unique identifiers
    ,   name: 'Naimul Khan'
    ,   email: 'knaimul@icloud.com'
    ,   phone: '212-555-1234'
    ,   size: 'large'
    ,   toppings: ['pepperoni', 'extra cheese']
    ,   glutenFree: false
    ,   specialInstructions : 'NO PEANUTS!!'
    }
]

// 👉 simulating axios for [GET] and [POST]
export default {
    get() {
      return Promise.resolve({ status: 200, success: true, data: orderPreferences })
    },
    post(url, { name, email, phone, size, toppings, glutenFree, specialInstructions}) {
      const orderPref = { id: uuidv4(), name, email, phone, size, toppings, glutenFree, specialInstructions }
      return Promise.resolve({ status: 200, success: true, data: orderPref })
    }
  }

