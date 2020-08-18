import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


export default function PizzaForm() {
  // managing state for our form inputs
  
  const [formState, setFormState] = useState({
    name:"",
    piesize: "",
    sauce: false,
    pineapples: false,
    jalepenos: false,
    onions: false,
    mushrooms: false,
    greenPeppers:false,
    beyondMeatPep: false,
    special: "",
    terms: true
  });


  const [errors, setErrors] = useState({
    name:"",
    piesize: "",
    sauce: "",
    pineapples:"",
    jalepenos:"",
    onions:"",
    mushrooms:"",
    greenPeppers:"",
    beyondMeatPep:"",
    special: "",
    terms: ""
  });

  const [serverError, setServerError] =useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  const [post, setPost] = useState([]);
  
  const validateChange = e => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({...errors,[e.target.name]: ""});
      console.log("victory");

    })
    .catch(err => {
      setErrors({...errors,[e.target.name]: err.errors[0]});
      console.log("error:",err);

    });
};

  const formSchema = yup.object().shape({
      name: yup
      .string()
      .min(2, "Name must be at least 2 characters"),
      piesize: yup
      .string(),
      sauce:yup
      .boolean()
      .oneOf([true,false]),
      pineapples: yup
      .boolean()
      .oneOf([true,false]),
      jalepenos: yup
      .boolean()
      .oneOf([true,false]),
      onions: yup
      .boolean()
      .oneOf([true,false]),
      greenPeppers:yup
      .boolean()
      .oneOf([true,false]),
      mushrooms:yup
      .boolean()
      .oneOf([true,false]),
      beyondMeatPep: yup
      .boolean()
      .oneOf([true,false]),
      special:yup
      .string(),
      terms: yup
      .boolean()
      .oneOf([true], "Please agree to T&Cs")
    });
  
    useEffect(() => {
      if(formState.name.length < 3){
         setButtonDisabled(true);
     }else{setButtonDisabled(false)}
    }, [formState])
    const data = [];

    const submitForm = e => {
        e.preventDefault(); 
        console.log("form submitted!");
        axios
        .post("https://reqres.in/api/users",formState)
        .then(res => {
        console.log("success!",res.data);

         setPost(res.data);
         data.push(formState)
         setServerError(null);

         setFormState({
          name:"",
          piesize: "",
          sauce: false,
          pineapples: false,
          jalepenos: false,
          onions: false,
          mushrooms: false,
          greenPeppers:false,
          beyondMeatPep: false,
          special: "",
          terms: true
       });
        })
        .catch(err => console.log(err.response));
    };

    const inputChange = e => {
      e.persist(); 
      console.log("input changed!", e.target.value); 
      const newFormData = {
        ...formState, 
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
  
      validateChange(e); 
      setFormState(newFormData); 
    };
 







return(
    <form onSubmit={submitForm}>
      <h1>Build your own Pizza</h1>
        <h2>What's your name?</h2>
        <label htmlFor='name'>
        <input
          type='text'
          name='name'
          data-cy="name" 
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
      </label>
       <div>
         <h2>Pick a size </h2>
         <label htmlFor='piesize'>

         <select
          id="piesize"
          name="piesize"
          data-cy="piesize"
          onChange={inputChange}
          value={formState.piesize}>
          <option>--Please choose something --</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Brooklyn">Brooklyn</option>
        </select>
        </label>
      </div>
      <h2>Sauce Anyone?</h2>
       
      <label htmlFor="House Sauce" className="House Sauce">House Sauce
        <input
          type="radio"
          id="House Sauce"
          name="sauce"
          data-cy="sauce"
          value={formState.sauce}
          onChange={inputChange}
        />
        </label>
      
       
        <label htmlFor="Marinara" className="Marinara">Marinara
          <input
            type="radio"
            id="Marinara"
            name="sauce"
            data-cy="sauce"
            value={formState.sauce}
            onChange={inputChange}
          />
          </label>
        
          <label htmlFor="Bbq" className="Bbq">Bbq
            <input
              type="radio"
              id="Bbq"
              name="sauce"
              data-cy="sauce"
              value={formState.sauce}
              onChange={inputChange}
            />
            </label>
            <label htmlFor="Alfredo" className="Alfredo">Alfredo
              <input
                type="radio"
                id="Alfredo"
                name="sauce"
                data-cy="sauce"
                value={formState.sauce}
                onChange={inputChange}
              />
              </label>
        
        {errors.sauce.length > 0 ? <p className="error">{errors.name}</p> : null}
      
      
      
       <h2>Choose Toppings</h2> 
        
        
       <label htmlFor="pineapples" className="pineapples">Pineapples
        <input
          type="checkbox"
          id="pineapples"
          name="pineapples"
          data-cy="pineapples"
          checked={formState.pineapples}
          onChange={inputChange}
        />
        </label>
              
       
       <label htmlFor="jalepenos" className="jalepenos">Jalepenos
          <input
            type="checkbox"
            id="jalepenos"
            name="jalepenos"
            data-cy="jalepenos"
            checked={formState.jalepenos}
            onChange={inputChange}
          />
          </label>

     
          <label htmlFor="onions" className="onions">Onions
          <input
            type="checkbox"
            id="onions"
            name="onions"
            data-cy="onions"
            checked={formState.onions}
            onChange={inputChange}
          />
          </label>
        
        <label htmlFor="greenPeppers" className="greenPeppers">Green Peppers
          <input
            type="checkbox"
            id="greenPeppers"
            name="greenPeppers"
            data-cy="greenPeppers"
            checked={formState.greenPeppers}
            onChange={inputChange}
          />
          </label>
        
        <label htmlFor="mushrooms" className="mushrooms">Mushrooms
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            data-cy="mushrooms"
            checked={formState.mushrooms}
            onChange={inputChange}
          />
          </label>
        
        <label htmlFor="beyondMeatPep" className="beyondMeatPep">Beyond Meat Pep
        <input
          type="checkbox"
          id="beyondMeatPep"
          name="beyondMeatPep"
          data-cy="beyondMeatPep"
          checked={formState.beyondMeatPep}
          onChange={inputChange}
        />
        </label>
        {errors.beyondMeatPep.length > 0 ? (
          <p className="error">{errors.toppings}</p>
        ) : null}

      <div>
          <h2>Special Instructions</h2>
      <label htmlFor="special"></label>
        <textarea
          id="special"
          type="text"
          name="special"
          data-cy="special"

          value={formState.special}
          onChange={inputChange}
        />
       
    </div>
      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          data-cy="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Cs
       
      </label>
          <button disabled = {buttonDisabled} type = "submit" data-cy = "submit" >Submit</button>

          <pre>Order Confirmation{JSON.stringify(post, null, 2)}</pre>

    </form>

);

}
