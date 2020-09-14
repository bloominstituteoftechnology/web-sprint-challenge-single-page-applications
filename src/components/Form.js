import React, {useState, useEffect} from 'react'
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    name: yup.string()
    .min(2, "Name must be at least two characters")
    .required("Name is Required"),
    size: yup.string(),
    pep: yup.string(),
    sausage: yup.string(),
    pickles:  yup.string(),
    onions: yup.string(),
    specialInstructions: yup.string()
  });




function Form() {
   


    const [pizzaInfo, setPizzaInfo] = useState({
        name: "",
        size: "",
        pep: "",
        sausage: "",
        pickles:  "",
        onions: "",
        specialInstructions: ""
      });


      const [errorState, setErrorState] = useState({
        name: "",
        size: ""
      });



      const validate = (e) => {
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
          .reach(formSchema, e.target.name)
          .validate(value)
          .then((valid) => {
            setErrorState({
              ...errorState,
              [e.target.name]: ""
            });
          })
          .catch((err) => {
            setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
            });
          });
      };



      const [buttonDisabled, setButtonDisabled] = useState(true);

      useEffect(() => {
        formSchema.isValid(pizzaInfo).then((valid) => {
          setButtonDisabled(!valid);
        });
      }, [pizzaInfo]);


    const changeHandler = (e) => {
        e.persist();
        validate(e);
    
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
      
        setPizzaInfo({ ...pizzaInfo, [e.target.name]: value });
     
    }

const subForm = (e) => {
    e.preventDefault()
    axios
  .post("https://reqres.in/api/users", pizzaInfo)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });

    setPizzaInfo({
        name: "",
        size: "",
        pep: "",
        sausage: "",
        pickles:  "",
        onions: "",
        specialInstructions: ""
    })
}


    return (
        <div>
           <form onSubmit={subForm}>


        <label htmlFor="name">
            Type your name
        <input type="text"
          name="name"
          id="name"
          value={pizzaInfo.name}
          onChange={changeHandler} />

        </label>
        <label htmlFor="Sizes">
        {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}












        Pick your size
        <select
          value={pizzaInfo.size}
          name="size"
          id="Sizes"
          onChange={changeHandler}
          
        >
        <option value="Pick a size">Pick A Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          
        </select>


        </label>





        <label htmlFor="pep">
        <input
          type="checkbox"
          id="pep"
          name="pep"
          checked={pizzaInfo.pep}
          onChange={changeHandler}
        />
        Pepporoni
     
      </label>

      <label htmlFor="sausage">
        <input
          type="checkbox"
          id="sausage"
          name="sausage"
          checked={pizzaInfo.sausage}
          onChange={changeHandler}
        />
        Sausage
     
      </label>
      <label htmlFor="pickles">
        <input
          type="checkbox"
          id="pickles"
          name="pickles"
          checked={pizzaInfo.pickles}
          onChange={changeHandler}
        />
        Pickles

     
      </label>
 <label htmlFor="onion">
        <input
          type="checkbox"
          id="onion"
          name="onions"
          checked={pizzaInfo.onions}
          onChange={changeHandler}
        />
        onions
     
      </label>

      <label htmlFor="instructions">
   
        <input type="text"
          name="specialInstructions"
          id="instructions"
          value={pizzaInfo.specialInstructions}
          onChange={changeHandler}
      
        />
        Special Instructions
        </label>

        <button disabled={buttonDisabled} type="submit">Add to Order</button>
           </form>
        </div>
    )
}

export default Form
