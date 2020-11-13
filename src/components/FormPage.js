import React from 'react'

function FormPage(props) {

    const {values, change, formSubmit, errors, disabled} = props

    const onSubmit = e =>{
        e.preventDefault()
        formSubmit()
    }

    const onChange = e =>{
        const {name,value,checked,type} = e.target
        const newValue = type === 'checkbox' ? checked : value;
        change(name,newValue)
    }

    return (
        <form onSubmit={onSubmit}>

            <div className="input-container">
                <label>
                        Name: 
                        <input type="text" onChange={onChange} value={values.name} name="name" />
                </label>
                <p className="error">{errors.name}</p>
            </div>

            <div className="input-container">
                <label>
                        Pizza Size: 
                        <select onChange={onChange} value={values.pizzaSize} name="pizzaSize" >
                            <option value="">Select Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                </label>
                <p className="error">{errors.pizzaSize}</p>
            </div>

            <div className="input-container">
                <h4>Topings: </h4>
                <label>
                    Peperoni: 
                    <input type="checkbox" onChange={onChange} name="peperoni" checked={values.peperoni} />
                </label>
                <label>
                    Cheese: 
                    <input type="checkbox" onChange={onChange} value={values.cheese} name="cheese" />
                </label>
                <label>
                    Bacon: 
                    <input type="checkbox" onChange={onChange} value={values.bacon} name="bacon" />
                </label>
                <label>
                    Mushroom: 
                    <input type="checkbox" onChange={onChange} value={values.mushroom} name="mushroom" />
                </label>
                <label>
                    Chocolate: 
                    <input type="checkbox" onChange={onChange} value={values.chocolate} name="chocolate" />
                </label>
            </div>

            <div className="input-container">
                <label>
                    Special Instructions:
                    <input type='text' onChange={onChange} name="specialInstructions" value={values.specialInstructions}  />
                </label>
                <p className="error">{errors.specialInstructions}</p>
            </div>




            <button disabled={disabled} >Submit</button>
        </form>
    )
}

export default FormPage
