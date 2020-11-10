import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "./Form";
import axios from "axios";
import "./OrderPage.css";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("You must enter your name")
    .min(2, "Your name must be two or more characters"),
  email: yup
    .string()
    .email("Your email address must be valid")
    .required("You must provide your email address"),
  size: yup.string().required("You must choose a size"),
});

function OrderPage(props) {
  return (
    <div className="wrapper">
      <h1>Create Your Pizza</h1>
      <div className="formWrapper">
        <Formik
          initialValues={{}}
          validationSchema={formSchema}
          onSubmit={(data) => {
            axios
              .post("https://reqres.in/api/users", data)
              .then((res) =>
                console.log(
                  `Submitted Successfully. Check network tab ${res.data}`
                )
              )
              .catch((err) =>
                console.log(
                  `Not submitted successfully. Check network tab to debug ${err}`
                )
              );
          }}
        >
          {({ handleSubmit, values, handleChange, handleBlur }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="name">
                  <Form
                    className="name"
                    name="name"
                    placeholder="name"
                    label="Name "
                  />
                </div>
                <div className="email">
                  <Form
                    className="email"
                    name="email"
                    placeholder="email"
                    label="Email "
                  />
                </div>
                <div className="size">
                  <select
                    className="size"
                    name="size"
                    label="Size "
                    value={values.size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="" label="Select a Size" />
                    <option value="small" label="Small" />
                    <option value="medium" label="Medium" />
                    <option value="large" label="Large" />
                  </select>
                </div>
                <div className="toppings">
                  <Form name="peperoni" type="checkbox" label="Peperoni " />
                  <Form name="sausage" type="checkbox" label="Sausage " />
                  <Form name="bacon" type="checkbox" label="Bacon " />
                  <Form name="cheese" type="checkbox" label="Cheese " />
                  <Form name="mushrooms" type="checkbox" label="Mushrooms " />
                  <Form name="olives" type="checkbox" label="Olives " />
                </div>
                <button
                  name="submit"
                  type="submit"
                  onClick={() => {
                    props.history.push("/confirm");
                  }}
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default OrderPage;
