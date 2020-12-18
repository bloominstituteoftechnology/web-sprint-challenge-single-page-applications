import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';

import OrderForm from './components/OrderForm';
import emptyPizzaForm from './static/initials';
import initialErrors from './static/initials';
import initialDisabled from './static/initials';
import schema from './validation';

const App = () => {
  const [order, setOrder] = useState({});
  const [formValues, setFormValues] = useState(emptyPizzaForm);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const orderSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      spinach: formValues.spinach,
      olives: formValues.olives,
      shrooms: formValues.shrooms,
      peppers: formValues.peppers,
    };
    setOrder(newOrder);
    setFormValues(emptyPizzaForm);
    console.log(order);
    return order;
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route>
          <OrderForm
            values={formValues}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            submit={orderSubmit}
            exact
            path='/order'
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
