import React from "react";
import axios from 'axios'
import App from "../App";
import { Router, MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

jest.mock('axios')

describe("Pizza test, sprint 3 challenge", () => {
  it('Homepage at "/" route, has link or button with #order-pizza, Review how to create links and buttons.', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/')
    const orderPizza = document.querySelector('#order-pizza')
    expect(orderPizza).toBeInTheDocument();
  })

  it('From homepage "/" route, click #order-pizza, navigate to "/pizza" route,  Review how to set up routes within a React application using Router, Route, Switch, and Link.', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/')
    const orderPizza = document.querySelector('#order-pizza')
    expect(orderPizza).toBeInTheDocument();
    fireEvent.click(orderPizza)
    expect(history.location.pathname).toBe('/pizza')
  });

  it('The "/pizza" route has a form with #pizza-form, Review how to build a form with the basic HTML form elements', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const pizzaForm = document.querySelector('#pizza-form')
    expect(pizzaForm).toBeInTheDocument()
  });

  it('Form has name text input with #name-input,  Review how to capture and handle input values using onChange.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const nameInput = document.querySelector('#name-input')
    expect(nameInput).toBeInTheDocument()
  });

  it('Form has validation for #name-input with error message "name must be at least 2 characters", Review how to validate user input in forms, such as using Yup.', async () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const nameInput = document.querySelector('#name-input')
    expect(nameInput).toBeInTheDocument()
    fireEvent.input(nameInput, {
      target: {value: 'a'}
    })
    await waitFor(() => {
      expect(screen.getByText('name must be at least 2 characters')).toBeInTheDocument()
    })
    nameInput.value = ''
  });

  it('Form has pizza size dropdown with #size-dropdown, Review how to control forms using form inputs such as dropdown.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const sizeDropdown = document.querySelector('#size-dropdown')
    expect(sizeDropdown).toBeInTheDocument()
  });

  it('Form has toppings checklist with at least 4 options, Review how to control forms using form inputs such as checklist.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
    expect(toppingsChecklist.length).toBeGreaterThanOrEqual(4)
  });

  it('Form has special instructions input with #special-text, Review how to capture and handle input values using onChange.', () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );
    expect(testLocation.pathname).toBe('/pizza')
    const specialInstructions = document.querySelector('#special-text')
    expect(specialInstructions).toBeInTheDocument()
  });

  it("Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders, Review how to utilize a form's submit event to and make POST requests to pass data collected from a form to a database.", async () => {
    let testLocation
    render(
      <MemoryRouter initialEntries={['/pizza']}>
        <App />
        <Route
        path="*"
        render={({ location }) => {
          testLocation = location;
          return null;
        }}
        />
      </MemoryRouter>
    );

    expect(testLocation.pathname).toBe('/pizza')
    const pizzaForm = document.querySelector('#pizza-form')
    expect(pizzaForm).toBeInTheDocument()

    const nameInput = document.querySelector('#name-input')
    const sizeDropdown = document.querySelector('#size-dropdown')
    const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
    const specialInstructions = document.querySelector('#special-text')
    const sizeOptions = screen.getAllByRole('option')

    userEvent.type(nameInput, 'Tony Stark')
    userEvent.selectOptions(sizeDropdown, sizeOptions[1])

    userEvent.click(toppingsChecklist[1])
    userEvent.click(toppingsChecklist[2])
    userEvent.type(specialInstructions, 'Here are the special instructions')

    await waitFor(() => {
      expect(screen.getByDisplayValue(/tony stark/i)).toBeInTheDocument()
    })
    expect(sizeOptions[1].selected).toBe(true)
    expect(toppingsChecklist[0]).not.toBeChecked()
    expect(toppingsChecklist[1]).toBeChecked()
    expect(toppingsChecklist[2]).toBeChecked()
    expect(screen.getByDisplayValue(/Here are the special instructions/i)).toBeInTheDocument()

    const testOrder = {}
    testOrder[nameInput.name] = nameInput.value
    testOrder[sizeDropdown.name] = sizeDropdown.value
    testOrder[specialInstructions.name] = specialInstructions.value
    toppingsChecklist.forEach(top => {
      testOrder[top.name] = top.checked ? true : false
    })

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({testOrder})
    );
    const orderButton = document.querySelector('#order-button')
    userEvent.click(orderButton)
    expect(axios.post("https://reqres.in/api/orders", testOrder));
  });
});
