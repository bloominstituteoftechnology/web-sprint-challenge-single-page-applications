import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function PizzaForm() {
  // managing state for our form inputs
  
  const [formState, setFormState] = useState({
    piesize: "Small",
    sauce: "",
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
    piesize: "Small",
    sauce: "",
    pineapples:"",
    jalepenos:"",
    onions:"",
    mushrooms:"",
    greenPeppers:"",
    beyondMeatPep:"",
    special: "",
    terms: true
  });

  const [serverError, setServerError] = useState("");

    const [value, setValue] = useState(false);
  
  
  //   // control whether or not the form can be submitted if there are errors in form validation (in the useEffect)
    const [buttonDisabled, setButtonDisabled] = useState(true);
  
  //   // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error
  
  // 
  
    // temporary state used to display response from API. this is not a commonly used convention
    const [post, setPost] = useState([]);
  
    // inline validation, validating one key/value pair at a time
    const validateChange = (e) => {
      // get the rules out of schema with reach at key "e.target.name" --> "formSchema[e.target.name]"
  
      yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value) 
        .then((valid) => {
          // if valid param is true, then erase any errors in error state at that key/value in errors
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
        })
        .catch((err) => {
          console.log("error",err);
  
          // if failing validation, set error in state
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
        });
    };
    // onSubmit function
    const formSubmit = (e) => {
      e.preventDefault(); // <form> onSubmit has default behavior from HTML!
      console.log("form submitted!");
  
      // send out POST request with obj as second param, for us that is formState.
      // trigger .catch by changing URL to "https://reqres.in/api/register" -> see step 7 in notion notes
      axios
        .post("https://reqres.in/api/users", formState)
        .then((res) => {
          console.log("success!", res.data);
          // update temp state with value from API to display in <pre>
          setPost(res.data);
  
          // if successful request, clear any server errors
          setServerError(null); // see step 7 in notion notes
  
          // clear state, could also use a predetermined initial state variable here
          setFormState({
              piesize: "Small",
              sauce: "",
              pineapples: false,
              jalepenos: false,
              onions: false,
              mushrooms: false,
              greenPeppers:false,
              beyondMeatPep: false,
              special:"",
              terms: true
          });
        })
        .catch((err) => {
          // this is where we could create a server error in the form! if API request fails, say for authentication (that user doesn't exist in our DB),
          // set serverError
          setServerError("oops! something happened!");
        });
    };
  
    // onChange function
    const inputChange = (e) => {
      // use persist with async code -> we pass the event into validateChange that has async promise logic with .validate
      e.persist(); // necessary because we're passing the event asyncronously and we need it to exist even after this function completes (which will complete before validateChange finishes)
      console.log("input changed!", e.target.value); //helps access the name in the input
      
      const newFormData = {
        ...formState, //clone from the formState above so the code below can access the key value pairs 
        [e.target.name]:// accesses the key value pair in formState
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
  
      validateChange(e); // for each change in input, do inline validation
      setFormState(newFormData); // update state with new data
    };
  
    
  
    // schema used for all validation to determine whether the input is valid or not
    const formSchema = yup.object().shape({
      piesize: yup
      .boolean()
      .oneOf(["Small","Medium","Large","Brooklyn"]),
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
  
    // whenever state updates, validate the entire form. if valid, then change button to be enabled.
    useEffect(() => {
      formSchema.isValid(formState).then((isValid) => {
       
        setButtonDisabled(!isValid); // true means btn will be disabled
      });
    }, [formState]);
  










return(
    <form onSubmit={inputChange}>
      <h1>Build your own Pizza</h1>
       <div>
         <h2>Pick a size </h2>
        
         <select
          id="piesize"
          name="piesize"
          onChange={inputChange}
          value={formState.piesize}
        >
          <option>--Please choose something --</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Brooklyn">Brooklyn</option>
        </select>
        
      </div>
      <h2>Sauce Anyone?</h2>
       
        <label htmlFor="House Sauce">House Sauce
        <input
          id="House sauce"
          type="radio"
          name="sauce"
          checked={formState.sauce }
          onChange={inputChange}
        /> </label>
      
       
       <label htmlFor="Marinara">Marinara
        <input
          id="Marinara"
          type="radio"
          name="sauce"
          value={formState.sauce}
          onChange={inputChange}
          checked
        /></label>
        
        <label htmlFor="Bbq">Bbq
        <input
        type="radio"
          id="Bbq"
          name="sauce"
          value={formState.sauce}
          onChange={inputChange}
        /></label>
       
        <label htmlFor="Alfredo">Alfredo
        <input
          id="Alfredo"
          type="radio"
          name="sauce"
          value={formState.sauce}
          onChange={inputChange}
        /></label>
        
        {errors.sauce.length > 0 ? <p className="error">{errors.name}</p> : null}
      
      
      
       <h2>Choose Toppings</h2> 
      
       <label htmlFor="pineapples">Pineapples 
        <input
          id="pineapples"
          type="checkbox"
          name="pineapples"
          value={formState.pineapple}
          onChange={inputChange}
          
        /></label>
       
       
        <label htmlFor="jalepenos">Jalepenos
        <input
          id="jalepenos"
          type="checkbox"
          name="jalepenos"
          value={formState.jalepenos}
          onChange={inputChange}
        /> </label>


     
        <label htmlFor="onions">Onions
        <input
          id="onions"
          type="checkbox"
          name="onions"
          value={formState.onions}
          onChange={inputChange}
        /></label>
        
        <label htmlFor="greenPeppers">Green Peppers
        <input
          id="green peppers"
          type="checkbox"
          name="greenPeppers"
          value={formState.greenPeppers}
          onChange={inputChange}
        /></label>
        
        <label htmlFor="mushrooms">Mushrooms
        <input
          id="mushrooms"
          type="checkbox"
          name="mushrooms"
          value={formState.mushrooms}
          onChange={inputChange}
        /></label>
        
        <label htmlFor="beyondMeatPep">Beyond Meat Pep
        <input
          id="beyondMeatPep"
          type="checkbox"
          name="beyondMeatPep"
          value={formState.beyondMeatPep}
          onChange={inputChange}
        /></label>
        
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
          value={formState.special}
          onChange={inputChange}
        />
       
    </div>
      
    

     
      <label htmlFor="terms" className="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms & Cs
       
      </label>
      <button disabled={buttonDisabled} type="submit">
      Add to Order
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>

)

}






