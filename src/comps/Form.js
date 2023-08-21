import React, {useState, useEffect} from 'react'
import * as yup from "yup"
import axios from 'axios'
const schema = yup.object().shape({
    namwe: yup.string().required("name must be at least 2 characters").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["1","2","3","4"], 'you must chose your size'),
    agree: yup.boolean().oneOf([true],"You must pick a topping" )
    ,agree2: yup.boolean().oneOf([true], "Pick a topping")
    ,agree3: yup.boolean().oneOf([true], "Pick a topping")
    ,agree4: yup.boolean().oneOf([true], "Pick a topping")

})

function Form() {

const [form,setForm] = useState({
    name: "",
    agree: false,
    agree2: false,
    agree3: false,
    agree4: false,
    size: ""
})
const [disabled, setDisabled] = useState(true)
const [formErrors, setFormErrors] = useState({
    name: "",
    agree: false,
    agree2: false,
    agree3: false,
    agree4: false,
    size: ""
})

const setErrors = (name,value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setFormErrors({...formErrors, [name]: "name must be at least 2 characters"}))
    .catch(err => setFormErrors({
        ...formErrors, [name]: err.errors[0]
    }))
}
const onChange = (event => {
const {checked,value,name,type} = event.target
const valueToUse = type === 'checkbox' ? checked : value
setErrors(name, valueToUse)
setForm({...form, [name]: valueToUse})
})

const submit = event => {
event.preventDefault()
const newUser = {name: form.name.trim(), size: form.size, agree:form.agree }
axios.post("https://reqres.in/api/orders", newUser)
.then(res => {
    setFormErrors(res.data)
console.log(res)
})
.catch(err => {
debugger
})
}
useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
    },[form])
  return (
    <div>
        <h1> Bloomtech Eats</h1>
        <form id='pizza-form' onSubmit={submit}>
            <label> Name
            <input 
            type="text"
            id="name-input"
            name="name"
            value={form.name}
            onChange={onChange}
            />
            </label><br/>

            <label>  Pick your Size
            <select id="size-dropdown" type="" name="size" value={form.size} onChange={onChange}>
                <option value="0"> -- Select a size--</option>
                <option value="1"> Small</option>
                <option value="2"> Medium</option>
                <option value="3"> Large</option>
                <option value="4"> X-large</option>
            </select><br/>
</label> 
          <h3> Add your toppings </h3>
            <input type="checkbox" id="topping1" name="topping1"checked={form.agree} onChange={onChange}/>  
            <label for="topping1"> Pepperoni</label><br/>
            <input type="checkbox" id="topping2" name="topping2" checked={form.agree2} onChange={onChange}/>
            <label for="topping2"> Bacon</label><br/>
            <input type="checkbox" id="topping3" name="topping3" checked={form.agree3} onChange={onChange}/>
            <label for="topping3"> Pineapple</label><br/>
            <input type="checkbox" id="topping4" name="topping4" checked={form.agree4} onChange={onChange}/>
            <label for="topping4"> Assorted Veggies</label><br/>


            <br/>

            <label id='special-text'> Special instructions <br/>
                <i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </i>
            </label><br />
            <button disabled={disabled}> Submit </button>
        </form>
    </div>
  )
}

export default Form
