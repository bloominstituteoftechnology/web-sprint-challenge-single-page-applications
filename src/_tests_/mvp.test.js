import React from "react";
import axios from 'axios'
import App from "../../src/App";
import { Router, MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";


jest.mock('axios')

describe("Pizza test, sprint 3 challenge", () => {
  it("Navigate to /, click #order-pizza, navigate to /pizza", () => {
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

  it("find a pizza-form at /pizza and renders required fields", () => {
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
    const nameInput = document.querySelector('#name-input')
    const sizeDropdown = document.querySelector('#size-dropdown')
    const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
    const specialInstructions = document.querySelector('#special-text')
    expect(pizzaForm).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(sizeDropdown).toBeInTheDocument()
    expect(toppingsChecklist.length).toBeGreaterThanOrEqual(4)
    expect(specialInstructions).toBeInTheDocument()



  });

  it("Fill out pizza-form, submit pizza-form with data to https://reqres.in/api/users", async () => {
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

    fireEvent.input(nameInput, {
      target: {value: 'a'}
    })
    await waitFor(() => {
      expect(screen.getByText('name must be at least 2 characters')).toBeInTheDocument()
    })
    nameInput.value = ''

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
    userEvent.click(screen.getByRole('button', { type: 'submit'}))
    expect(axios.post).toBeCalledWith('https://reqres.in/api/users', testOrder)

  });
});