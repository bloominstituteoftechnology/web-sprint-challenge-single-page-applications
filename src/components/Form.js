import React, {useState, useEffect} from 'react'

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


      const changeHandler = (e) => {
        e.persist();
        validate(e);
    
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
      
        setPizzaInfo({ ...pizzaInfo, [e.target.name]: value });
     
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
