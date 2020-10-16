import React from 'react';


const Pizza = (props) => {
    const { values, submit, change, disabled, errors} = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
      };

    return (
      <div>
        <form className="build" onSubmit={onSubmit}>
        <div className="build-div">

          <h1>Build Your Own Pizza</h1>

          <div className="pic-container"/>

          <label>
            Name 
          <input
          value={values.name}
          onChange={onChange}
          name="name"
          type="text"
          />
          </label>
          
          <label>
          Size
          <select onChange={onChange} value={values.size} name="size">
            <option value="">- Select an option -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

          <h2>Toppings</h2>

          <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
          Spinach
          <input
            type="checkbox"
            name="spinach"
            checked={values.spinach}
            onChange={onChange}
          />
        </label>

        <label>
          Feta
          <input
            type="checkbox"
            name="feta"
            checked={values.feta}
            onChange={onChange}
          />
        </label>

        <label>
          Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>
        
        <label>
            Special Instructions 
          <input
          value={values.instructions}
          onChange={onChange}
          name="instructions"
          type="text"
          />
          </label> 
        <div>
          <button disabled={disabled} type="submit">Add to Order</button>
        </div>
            </div>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
            </div>
            </form>
            
        </div>
    )
}

export default Pizza;