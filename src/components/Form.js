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
            
        </div>
    )
}

export default Form
