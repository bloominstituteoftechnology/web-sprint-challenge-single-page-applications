import { assertEnumDefaultedMember } from "@babel/types"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import * as yup from 'yup'
import schema from './Validation'

const initialFormValues = {
    name: "",
    size: "",
    toppings: "",
    special: "",
    agree: false,


}
const initialErrors = {
    name: "",

}
const initialDisabled = true;



function PizzaForm({ }) {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const { push } = useHistory();
    const [disabled, setDisabled] = useState(initialDisabled)

    const handleChange = (evt) => {
        validate(evt.target.name, evt.target.value)
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value,
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        assertEnumDefaultedMember(formValues)
    }
    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }
    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, { formValues })

    return (
        <form id="pizza-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name-input" type='text' name='name'
                onChange={handleChange}
                value={formValues.name} />

            <label htmlFor="size">Size</label>
            <select id="size-dropdown"
                name="size" onChange={handleChange} value={formValues.size}>
                <option value=''> - select a Size -</option>
                <option value="SM">
                    Small
                </option>
                <option value="MD">
                    Medium
                </option>
                <option value="LG">
                    Large
                </option>
            </select>

            <label>Bacon
                <input name="agree" type="checkbox" />
            </label>
            <label>Pepperoni
                <input name="agree" type="checkbox" />
            </label>
            <label>Sausage
                <input name="agree" type="checkbox" />
            </label>
            <label>MeatBall
                <input name="agree" type="checkbox" />
            </label>





            <label htmlFor="special">Special-selection</label>
            <input id="special-text" type="text" name="special"
                onChange={handleChange} value={formValues.special} />

            <button disabled={disabled}>Submit</button>


        </form>
    )

}
export default PizzaForm