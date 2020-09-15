// import React, {useState, useEffect} from 'react';
// import {Route} from 'react-router-dom';
// import Pizza from "./Pizza";
// import * as yup from 'yup';

// export  default function Form() {
//     const defaultState = {
//         name: '',
//         size: '',
//         pepperoni: 0,
//         peppers: 0,
//         sausage: 0,
//         pineapple: 0,
//         instructions: '',
//     }

//     const [user, setUser] = useState(defaultState);
//     const [errors, setErrors] = useState({...defaultState});
//     const [disableButton, setDisableButton] = useState(true);
//     const size = ['6', '10', '12', '16'];

//     let formSchema = yup.object().shape({
//         name: yup.string().required('Please tell us your name').min(2, 'Names must be at least 2 letters'),
//         size: yup.string().required('Choose a size').oneOf(size, 'Choose a size'),
//         pepperoni: yup.boolean(),
//         peppers: yup.boolean(),
//         sausage: yup.boolean(),
//         pineapple: yup.boolean(),
//         instructions: yup.string(),
//     });

//     const validateChange = event => {
//         event.persist();

//         yup.reach(formSchema, event.target.name)
//             .validate(event.target.value)
//             .then(valid => {
//                 console.log('valid', valid);
//                 setErrors({...errors, [event.target.name]: ''})
//             })
//             .catch(error => {
//                 console.log('error', error);
//                 setErrors({...errors, [event.target.name]: error.errors[0]})
//             });

//         if(event.target.value.length === 0) {
//             setErrors({...errors, [event.target.name]: `${event.target.name} is required`});
//         }
//     }

//     useEffect(() => {
//         formSchema.isValid(user).then(valid => setDisableButton(!valid));
//     }, [formSchema, user]);

//     const handleChange = event => {
//         const targetValue =
//         event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//         setUser({
//             ...user,
//             [event.target.name]: targetValue
//         });
//         validateChange(event);
//     }

//     const handleSubmit = event => {
//         event.preventDefault();
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value
//         });
//         console.log('submittedUser', user);
//         setUser(defaultState);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='name'>
//                     Name:
//                     <input data-cy='name-fld' type='text' name='name' onChange={handleChange} value={user.name} errors={errors} />
//                     {errors.name.length > 0 ? <p data-cy='name-err'>{errors.name}</p> : ''} 
//                 </label>
//                 <label htmlFor='size'>
//                     Pizza Size:
//                     <select data-cy='size-fld' name='size' onChange={handleChange} value={user.size} errors={errors}>
//                         <option value=''>Choose a size:</option>
//                         {size.map((s, i) => 
//                             <option value={s} key={i}>{s}</option>
//                         )}
//                     </select>
//                     {errors.size.length > 0 ? <p data-cy='size-err'>{errors.size}</p> : ''}
//                 </label>
//                 <label htmlFor='pepperoni'>
//                     Pepperoni:
//                     <input data-cy='pepperoni-fld' name='pepperoni' type='checkbox' value={user.pepperoni} onChange={handleChange} checked={user.pepperoni} />
//                 </label>
//                 <label htmlFor='peppers'>
//                     Peppers:
//                     <input data-cy='peppers-fld' name='peppers' type='checkbox' value={user.peppers} onChange={handleChange} checked={user.peppers} />
//                 </label>
//                 <label htmlFor='sausage'>
//                     Sausage:
//                     <input data-cy='sausage-fld' name='sausage' type='checkbox' value={user.sausage} onChange={handleChange} checked={user.sausage} />
//                 </label>
//                 <label htmlFor='pineapple'>
//                     Pineapple:
//                     <input data-cy='pineapple-fld' name='pineapple' type='checkbox' value={user.pineapple} onChange={handleChange} checked={user.pineapple} />
//                 </label>
//                 <label htmlFor='instructions'>
//                     Additional Instructions:
//                     <input data-cy='instructions-fld' name='instructions' type='textarea' value={user.instructions} onChange={handleChange} />
//                 </label>
//                 <button data-cy='order-btn' disabled={disableButton}>Add to Order</button>
//             </form>
//             <Route path='/pizza' component={Pizza} />
//         </div>
//     );
// }



import React from "react";
// import * as Yup from "yup";


export default function Form(props){
    return (
        <div className="build-pizza">
            <form onSubmit={props.submit}>
                {/* <img width="100%" src="https://images7.alphacoders.com/690/690886.jpg"/> */}
                <h1>Build Your Pizza</h1>
                <section>
                    <div className="form-heading">
                        <h2>Enter Your Name</h2>
                        <small>required</small>
                    </div>
                    <label htmlFor="name">Name: </label>
                    <input value={props.pizzaOrder.name} onChange={props.onInputChange} id="name" name="name" type="text"/>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Select a Size</h2>
                        <small>required</small>
                    </div>
                    <label htmlFor="size">Size: </label>
                    <select onChange={props.onInputChange} id="size" name="size">
                        <option defaultValue value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Toppings</h2>
                        <small>choose up to 4</small>
                    </div>
                    <label htmlFor="pepperoni">
                       Pepperoni <input checked={props.pizzaOrder.pepperoni} onChange={props.onInputChange} name="pepperoni" id="pepperoni" type="checkbox"/>
                    </label>
                    <label htmlFor="olives">
                       Olives <input checked={props.pizzaOrder.olives} onChange={props.onInputChange} name="olives"  id="olives" type="checkbox"/>
                    </label>
                    <label htmlFor="ham">
                       Ham <input checked={props.pizzaOrder.ham} onChange={props.onInputChange}name="ham"  id="ham" type="checkbox"/>
                    </label>
                    <label htmlFor="onion">
                       Onion <input checked={props.pizzaOrder.onion} onChange={props.onInputChange} name="onion"  id="onion" type="checkbox"/>
                    </label>
                </section>
                <section>
                    <div className="form-heading">
                        <h2>Anything Else?</h2>
                    </div>
                    <label htmlFor="specialInstructions">Special instructions: </label>
                    <input value={props.pizzaOrder.specialInstructions} onChange={props.onInputChange} name="specialInstructions" id="specialInstructions" type="text"/>
                </section>
                <div className="errors">
                    {props.errors.name}
                </div>
                <button>Add to Order</button>
            </form>
        </div>
    )
}