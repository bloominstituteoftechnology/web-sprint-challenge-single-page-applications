import React from 'react';
import Order from './Order';

const Pizza = (props) => {
    const { values, submit, change, disabled, errors, orders} = props;

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
      <div className="build">
        <form onSubmit={onSubmit}>
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
          <button disabled={disabled} type="submit">submit</button>
        </div>
            </div>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
            </div>
            </form>
            <div>
            {orders.map((order) => {
            return <Order key={order.id} details={order} />;
            })}
            </div>
        </div>
    )
}

export default Pizza;