import React, {useState, useEffect} from "react";
import axios from "axios";
import { Route, Switch, useHistory} from "react-router-dom";
import Builds from "./build";
import BuildForm from "./form";
import schema from "./formSchema";
import * as yup from "yup";

const initialFormValues ={
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  bacon: false,
  pineapple: false,
  tomatoes: false,
  onions: false,
  mushrooms: false,
  jalepenos: false,
  bananaPeppers: false,
}

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
}

const initialBuild = [];
const initialDisabled = true;

const App = () => {
  const [pizzaBuild, setPizzaBuild] = useState(initialBuild)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)
  const history = useHistory();
  
const getBuild = () => {
  axios.get("https://reqres.in/")
  .then((res) => {
    setPizzaBuild(res.data);
  })
    .catch((err) => {
      console.log(err)
  });
}

const postNewBuild = (newBuild) => {
  axios
  .post("https://reqres.in/", newBuild)
  .then((res) => {
    setPizzaBuild([res.data, ...pizzaBuild])
    setFormValues(initialFormValues)
  })
  .catch((err) => {
    console.log(err)
  });
};

const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  })
  .catch((err) => {
    setFormErrors({
    ...formErrors,
    [name]: err.errors[0],
    });
  });
  setFormValues({
    ...formValues,
    [name]: value,
  })
}

const formSubmit = () => {
  const newBuild = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    toppings: ["pepperoni", "sausage", "canadianBacon", "bacon", "pineapple", "tomatoes", "onions", "mushrooms", "jalepenos", "bananaPeppers"].filter(
      (topping) => formValues[topping]
    ),
  };
  postNewBuild(newBuild);
};

useEffect(() => {
  getBuild()
}, []);

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues])

  return (
    <>
      <h1>Lambda's Alpha Eats</h1>
      <p>Because Beta is never an option!</p>
      <Switch>
        <Route exact path={"/"}>
          <button onClick={() => history.push("/pizza")}>BUILD YOUR OWN</button>
        </Route> 
        <Route path="/pizza">
          <BuildForm build={BuildForm} 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
      </Switch>

      {pizzaBuild.map((buildPizza) => {
        return <Builds key={buildPizza.id} details={buildPizza} />
      })}
    </>
  );
};
export default App;
