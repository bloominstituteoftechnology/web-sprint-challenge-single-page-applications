

import Apps from './App.js'
import React, {useState, useEffect} from "react"





const Form = () =>{



// State Hooks
const [errors, setErrors] = useState({ choice1:"" ,choice2:"", choice3:"",choice4:"", choice5:"", choice6:"", choice7:"", choice8:"", choice9:"", choice10:"",choice11:"",choice12:"", choice13:"", choice14:"",choice15:"" , choice16:"", choice17:"",choice18:"",choice19:"", choice20:"", choice21:"" })     
const [statePizza, setFormPizza] = useState({ choice1:false ,  choice2:false, choice3:false,choice4:false, choice5:false, choice6:false, choice7:false, choice8:false, choice9:false, choice10:false,choice11:false,choice12:false, choice13:false, choice14:false,choice15:false , choice16:false, choice17:false,choice18:"",choice19:"", choice20:false, choice21:false})                   
const [disabled, setDisabled] = useState(true)






// event handler
const change = event => {
    const {checked,value,name,type} = event.target
      const valueTouse = type ==="checkbox" ? checked : value
        setFormErrors(name, valueTouse)
         setFormPizza({ ...statePizza, [name]: valueTouse })
        };


//Providing error feedback for the user.
   

// setFormErrors
        const setFormErrors = (name, value) => {
           Yup.reach(schema,name).validate(value).then(() => setErrors({...errors,[name]:""}) )
             .catch( err => setErrors({...errors, [name] : err.errors[0] }))
}             
// useEffect
    
          useEffect(() => {
              schema.isValid(statePizza).then( vaild => setDisabled(!vaild))
            },[statePizza])

// Submiting a post to dummy api
const submit = event => {
  event.preventDefault()
  const newUser = { choice1:statePizza.user.trim(), choice2:statePizza.choice2, choice3:statePizza.choice3,choice4:statePizza.choice4,choice5:statePizza.choice5,choice6:statePizza.choice6,  choice7:statePizza.choice7,  choice8:statePizza.choice8,  choice9:statePizza.choice9,  choice10:statePizza.choice10,  choice11:statePizza.choice11,choice12:statePizza.choice12, choice13:statePizza.choice13, choice14:statePizza.choice14,choice15:statePizza.choice15, choice16:statePizza.choice16,choice17:statePizza.choice17, choice18:statePizza.choice18,choice19:statePizza.choice19,choice20:statePizza.choice20,choice21:statePizza.choice21}
  axios.post("https://reqres.in/api/users", newUser)
  .then(res =>{
    /// (7) 
    setFormErrors({choice1:"" ,choice2:"", choice3:"",choice4:"", choice5:"", choice6:"", choice7:"", choice8:"", choice9:"", choice10:"",choice11:"",choice12:"", choice13:"", choice14:"",choice15:"" , choice16:"", choice17:"",choice18:"",choice19:"", choice20:"", choice21:"",})
    })
    .catch(err => {
     
    })
    }






    const schema = Yup.object().shape({
        choice1:Yup.boolean().oneOf([true], "please provide your data"),
        choice2:Yup.boolean().oneOf([true], "please provide your data"),
        choice3:Yup.boolean().oneOf([true], "please provide your data"),
        choice4:Yup.boolean().oneOf([true], "please provide your data"),
        choice5:Yup.boolean().oneOf([true], "please provide your data"),
        choice6:Yup.boolean().oneOf([true], "please provide your data"),
        choice7:Yup.boolean().oneOf([true], "please provide your data"),
        choice8:Yup.boolean().oneOf([true], "please provide your data"),
        choice9:Yup.boolean().oneOf([true], "please provide your data"),
        choice10:Yup.boolean().oneOf([true], "please provide your data"),
        choice11:Yup.boolean().oneOf([true], "please provide your data"),
        choice12:Yup.boolean().oneOf([true], "please provide your data"),
        choice13:Yup.boolean().oneOf([true], "please provide your data"),  
        choice14:Yup.boolean().oneOf([true], "please provide your data"),
        choice15:Yup.boolean().oneOf([true], "please provide your data"),
        choice16:Yup.boolean().oneOf([true], "please provide your data"),     
        choice17:Yup.boolean().oneOf([true], "please provide your data"),
        choice18:Yup.string().required("user is required").min(10,"must add 10 characters"),
        choice19:Yup.string().required("user is required").min(10,"must add 10 characters"),
        choice20:Yup.boolean().oneOf([true], "please provide your data"),
        choice21:Yup.boolean().oneOf([true], "please provide your data"),
        })
             
return(
<div style = {{ color: "red"}} >
<div> {errors.choice1}</div>  <div> {errors.choice2}</div>   <div> {errors.choice3}</div> <div> {errors.choice4}</div> <div>{errors.choice5}  </div> <div>{errors.choice6} </div>  <div>{errors.choice7}</div>   <div>{errors.choice8}</div>  <div>{errors.choice9} </div>   <div>{errors.choice10}</div>   <div> {errors.choice11}</div>  <div>{errors.choice12} </div>   <div>{errors.choice13}</div>    <div> {errors.choice14}</div>    <div>{errors.choice15}</div>    <div>{errors.choice16}</div>    <div>{errors.choice17}</div> <div>{errors.choice18}</div><div>{errors.choice19} </div> <div>{errors.choice20} </div>  <div>{errors.choice21} </div> </div>
<form onSubmit={submit}>
<h2>Pizza Land</h2>

     <h3>Lets Build Your Own Pizza, Shall We?</h3>
        <h3>Choice of Size</h3>
          <h5> Required</h5>
            <label> Select Bar
              <select onChange={change}  value={statePizza.choice16} name="choice16">
                 <option>-Select One- </option>
                 <option>Personal </option>
                 <option> Meduim </option>
                 <option>large </option>
                 <option> extra large </option>
                 <option>Jumbo </option>
               </select>
                   </label>
                  
                     <h3>Choice of Sauce</h3>
                       <h5> Required</h5>
                       <h6>tomatos</h6>
                       <input onChange={change}  checked={statePizza.choice1}  name = "choice1" type="radio"/>
                       <h6>garlic</h6>
                       <input onChange={change}  checked={statePizza.choice2}     name = "choice2" type="radio"/>
                       <h6>blue cheese</h6>
                       <input onChange={change}  checked={statePizza.choice3}  name = "choice3" type="radio"/>
                       <h6>olive</h6>
                       <input onChange={change}  checked={statePizza.choice4}  name = "choice4" type="radio"/>
      
                          <h3>Add Toppings</h3>
                          <h5> Choose up to 10</h5>
                      <div className = "toppings"> 
                       <input onChange={change}  checked={statePizza.choice5}  name = "choice5" type="checkbox"/>
                       <h6>tomatos</h6>
                       <input onChange={change}  checked={statePizza.choice6}  name = "choice6" type="checkbox"/>
                       <h6>cheese</h6>
                       <input onChange={change}  checked={statePizza.choice7}  name = "choice7" type="checkbox"/>
                       <h6>mango</h6>
                       <input onChange={change}  checked={statePizza.choice8}  name = "choice8" type="checkbox"/> 
                       <h6>orange</h6>
                       <input onChange={change}  checked={statePizza.choice9}  name = "choice9" type="checkbox"/>
                       <h6>chicken</h6>
                       <input onChange={change}  checked={statePizza.choice10}  name = "choice10" type="checkbox"/>
                       <h6>vampire</h6>
                       <input onChange={change}  checked={statePizza.choice11}  name = "choice11" type="checkbox"/>
                       <h6>pine</h6>
                       <input onChange={change}  checked={statePizza.choice12}  name = "choice12" type="checkbox"/>
                       <h6>pepper</h6>
                       <input onChange={change}  checked={statePizza.choice13}  name = "choice13" type="checkbox"/>
                       <h6>vegi</h6>
                       <input onChange={change}  checked={statePizza.choice14}  name = "choice14" type="checkbox"/>
                       <h6>supreme</h6>
                       <input onChange={change}  checked={statePizza.choice15}  name = "choice15" type="checkbox"/>
                       <h6>extra cheese</h6>
                       </div>
                       <h3>Choice of Substitue</h3>
                        <h5> Choose up to 1</h5>
                          <h6> Gluten Free Crust(+ $1.00)</h6>
                            <h5> Submit name a minimal of 10 characters</h5>
                              <input onChange={change}  checked={statePizza.choice16}  name = "choice16" type="checkbox"/>
                                 <input onChange={change}  checked={statePizza.choice19}  name = "choice18" type="text" placeholder="First Name" />    
                                   <input onChange={change}  checked={statePizza.choice19}  name = "choice19" type="text" placeholder="Last Name" />    
                                     <input onChange={change}  checked={statePizza.choice21}  name = "choice21" type="number"/>  
                                       <button className = "Submit" disabled={disabled}> Submit</button> 
                                         <input className = "Reset" onChange={change}  checked={statePizza.choice20}  name = "choice20" type ="reset" /> 
                                         </form> 
                                         </div>
                                         </div>
) 
}
