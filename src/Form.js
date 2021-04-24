import React from "react";



export default function Form(props){
    const {values,update,submit,errors,disabled,orders} =props;

  // Functions
  const onChange = evt =>{
    const {name, value, checked,type} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    update(name,valueToUse);
}
const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}



return (
    <div className = "container">
        <div className ="head">
        <img className ="homeImage" src ="https://i0.wp.com/mthpizza.com/wp-content/uploads/2019/09/MTHPIZZA.png?fit=1575%2C788&ssl=1" alt ="pizza"/>
        </div>

        <form id ="pizza-form" onSubmit={onSubmit}>
        <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                
            </div>
            <h2>Order Here!</h2>

            {/* Enter Name */}
            <div className ="form-style">

                <label>
                <div>
                    Name: 
                </div>
                <div>
                    <input id ="name-input" name = "name" type ="text"  placeholder = "Enter Your Name" onChange ={onChange} value ={values.name}/>
                </div>
                </label>
            </div>

            {/* Size */}
            <div className ="form-style" >
                <label>
                    <div>
                    Select a Size:
                    </div>
                    <div>
                    <select id ="size-dropdown" value={values.size} name="size" onChange ={onChange}>
                        <option value="">-- Select a Size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                </select>
                    </div>
                </label>
            </div>
            {/* Select Toppings */}
            <div className ="toppings">
                <div className = "child">
                <div className ="check">
                Select Your Toppings: 
                </div>
                <div className ="check">
                <label>
                Pineapple:
                    <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange ={onChange}
                        />
                </label>
                </div>

                <div className ="check">
                <label>
                    Jalapenos:
                    <input
                        type="checkbox"
                        name="jalapenos"
                        checked={values.jalapenos}
                        onChange ={onChange}
                    />
                </label>
                </div>


                <div className ="check">
                <label>
                    Mushrooms:
                    <input
                        type="checkbox"
                        name="mushrooms"
                        checked={values.mushrooms}
                        onChange ={onChange}
                    />
                </label>
                </div>


                <div className ="check">
                <label>
                    Pepperoni:
                    <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange ={onChange}
                    />
                </label>
                </div>
                </div>
            </div>
            {/* Special Instructions */}
            <div className = 'form-style'>
                <label>
                    <div>
                    Special Instructions:
                    </div>
                    <div>
                    <input id ="special-text"name = "instructions" type ="text"  placeholder = "Special Instructions" onChange ={onChange} value ={values.instructions}/>
                    </div>
                </label>
            </div>
            {/* Submit btn */}
            <div className="form-style-button">
      
           

                <button to = '/orders' disabled={disabled} id ="order-button">Submit</button>
                    
        
    

            </div>
        </form>
    </div>
)
}