import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";






const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field and must be at least 2 characters")
    
  });
  
  export default function Form(props) {
    // console.log(props)
  
    const [formState, setFormState] = useState({
      name: "",
      pizzasizes: "",
      pepporoni: false,
      mushrooms: false,
      greenpeppers: false,
      extracheese: false,
      instructions: "",

    });
  
    const [errors, setErrors] = useState({
      name: ""
       });
  
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
    const validateChange = (e) => {
      yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name)
        .then((valid) => {
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch((err) => {
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    };
    useEffect(() => {
      formSchema.isValid(formState).then((valid) => {
        setIsButtonDisabled(!valid);
      });
    }, [formState]);
  
    const onChange = (e) => {
      e.persist();
      validateChange(e);
      if (e.target.name === "name") {
     setFormState({ ...formState, [e.target.name]: e.target.value });
    }
      } 
        
    
    const formSubmit = (e) => {
      e.preventDefault();
      console.log("form submited");
      axios
        .post("https://reqres.in/api/users", formState)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
return (
    <div >
            <form onSubmit={formSubmit}>
            <div>
            <label>
           
          <input
            name="name"
            type="text"
            maxLength="30"
            placeholder="name"
            onChange={onChange}
            value={formState.name}
          />
          {errors.name.length > 2 ? <p>{errors.name} </p> : null}
        </label>
        </div>
        <div>
            <label for= "Pizza">Choose a Pizza Size:

            <select name="pizzasizes" id="pizza" value={formState.pizzasizes}>
               <option value="Small">Small $10.99</option>
               <option value="medium"> Medium $13.99</option>
               <option value="Large">Large $15.99</option>
              <option value="Extra Large">Extra Large $19.99</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="Toppings">
            <div>Choose your toppings</div>
            <div>Pepporoni</div>
             <input
            type="checkbox"
            name="pepperoni"
            value="pepperoni"/>
            <div>Mushrooms</div>
            <input 
            type = "checkbox"
            name = "mushrooms" 
            value = "mushrooms"/>
            <div>Green Peppers</div>
            <input 
            name ="greenpeppers"
            type = "checkbox" 
            value = "greenpeppers"/>
            <div>Extra Cheese</div>
            <input 
            name ="extracheese"
            type = "checkbox"
            value ="extracheese" />
         </label>
       </div> 
          <p>Special instructions</p>
         <input name="instructions" type="text" size="200" />

         <div>
         <button disabled={isButtonDisabled}>Place your order</button>
         </div>
        </form>
  
      </div>
      
)

}