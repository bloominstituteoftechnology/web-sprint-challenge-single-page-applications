import { customAlphabet, nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';
import * as yup from 'yup';

function PizzaForm(props) {
  const history = useHistory();
  const [pizzaOptions, setPizzaOptions] = useState({
    size: ['Small', 'Medium', 'Large', 'Extra Large'],
    sauce: ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'],
    toppings: [
      'Pepperoni',
      'Sausage',
      'Canadian Bacon',
      'Spicy Italian Sausage',
      'Garlic Chicken',
      'Onions',
      'Green Pepper',
      'Diced Tomatos',
      'Black Olives',
      'Roasted Garlic',
      'Artichoke Hearts',
      'Three Cheese',
      'Pineapple',
      'Extra Cheese',
    ],
    substitute: ['Gluten Free Crust'],
  });

  const [order, setOrder] = useState({
    name: '',
    size: '',
    sauce: '',
    toppings: [],
    substitute: '',
    instructions: '',
  });

  const [isSubmitEnabled, setSubmitEnabled] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required('Name for order is required'),
    size: yup.string().required('Size is required'),
    sauce: yup.string(),
    toppings: yup.array().max(10, "Can't have more than 10 toppings"),
    substitute: yup.string(),
    instructions: yup.string(),
  });

  useEffect(() => {
    formSchema.isValid(order).then((valid) => {
      setSubmitEnabled(valid);
    });
  }, [order]);

  const changeInput = (evt) => {
    if (evt.target.type !== 'radio' || evt.target.type !== 'checkbox') {
      setOrder({ ...order, [evt.target.name]: evt.target.value });
    }

    if (evt.target.type === 'radio') {
      setOrder({ ...order, [evt.target.name]: evt.target.value });
    }

    if (evt.target.name === 'toppings') {
      const toppings = [...order.toppings];
      if (toppings.length < 10) {
        if (evt.target.checked === true) {
          toppings.push(evt.target.value);
          setOrder({ ...order, toppings: toppings });
        } else {
          const newToppings = toppings.filter(
            (topping) => topping !== evt.target.value
          );
          setOrder({ ...order, toppings: newToppings });
        }
      } else {
        setOrder({ ...order });
      }
    }

    if (evt.target.name === 'substitute') {
      if (evt.target.checked === true) {
        setOrder({ ...order, substitute: evt.target.value });
      } else {
        setOrder({ ...order, toppings: '' });
      }
    }
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    if (isSubmitEnabled) {
      const nanoid = customAlphabet('1234567890', 5);
      props.addToOrders({
        orderNumber: nanoid(),
        ...order,
      });
      history.push('/orderConfirmation');
    } else throw new Error('Form not submittable');
  };

  return (
    <div>
      <h2>Build Your Own Pizza</h2>
      <form onSubmit={submitForm}>
        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Name for Order</p>
            <p className="reqText">Required</p>
          </div>
          <div className="groupInput">
            <input
              type="text"
              name="name"
              id="name"
              value={order.name}
              onChange={(e) => changeInput(e)}
            />
          </div>
        </div>

        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Choice of Size</p>
            <p className="reqText">Required</p>
          </div>
          <div className="groupInput">
            <select
              name="size"
              id="selectPizzaSize"
              value={order.size}
              onChange={changeInput}
            >
              <option value="">Please select a size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Choice of Sauce</p>
            <p className="reqText">Required</p>
          </div>
          <div className="groupInput">
            <input
              type="radio"
              name="sauce"
              value="Original Red"
              id="originalRed"
              checked={order.sauce === 'Original Red'}
              onChange={changeInput}
            />
            <label htmlFor="originalRed">Original Red</label>
            <input
              type="radio"
              name="sauce"
              value="Garlic Ranch"
              id="garlicRanch"
              checked={order.sauce === 'Garlic Ranch'}
              onChange={changeInput}
            />
            <label htmlFor="garlicRanch">Garlic Ranch</label>
            <input
              type="radio"
              name="sauce"
              value="BBQ Sauce"
              id="bbqSauce"
              checked={order.sauce === 'BBQ Sauce'}
              onChange={changeInput}
            />
            <label htmlFor="bbqSauce">BBQ Sauce</label>
            <input
              type="radio"
              name="sauce"
              value="Spinach Alfredo"
              id="spinachAlfredo"
              checked={order.sauce === 'Spinach Alfredo'}
              onChange={changeInput}
            />
            <label htmlFor="spinachAlfredo">Spinach Alfredo</label>
          </div>
        </div>
        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Add Toppings</p>
            <p className="reqText">Choose up to 10</p>
          </div>
          <div className="groupInput">
            {pizzaOptions.toppings.map((topping) => {
              const toppingLowerStripped = topping
                .toLowerCase()
                .replace(' ', '');
              return (
                <div key={toppingLowerStripped} className="checkboxGroup">
                  <div className="checkboxInputGroup">
                    <input
                      type="checkbox"
                      name="toppings"
                      id={toppingLowerStripped}
                      value={toppingLowerStripped}
                      checked={order.toppings.includes(toppingLowerStripped)}
                      onChange={changeInput}
                    />
                    <label htmlFor={toppingLowerStripped}>{topping}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Choice of Substitute</p>
            <p className="reqText">Choose up to 1</p>
          </div>
          <div className="groupInput">
            {pizzaOptions.substitute.map((sub) => {
              const toppingLowerStripped = sub.toLowerCase().replace(' ', '');
              return (
                <div key={toppingLowerStripped} className="checkboxGroup">
                  <div className="checkboxInputGroup">
                    <input
                      type="checkbox"
                      name="substitute"
                      id={toppingLowerStripped}
                      value={sub}
                    />
                    <label htmlFor={toppingLowerStripped}>{sub}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="formGroup">
          <div className="groupHeader">
            <p className="groupHeader_Title">Special Instructions</p>
          </div>
          <div className="groupInput">
            <textarea
              name="instructions"
              value={order.instructions}
              onChange={changeInput}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input type="submit" value="Add To Order" disabled={!isSubmitEnabled} />
      </form>
      <div className="total"></div>
    </div>
  );
}

export default PizzaForm;
