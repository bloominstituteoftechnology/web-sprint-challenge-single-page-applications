import React from "react";
import axios from 'axios'
import App from "../App";
import { Router, MemoryRouter, BrowserRouter, Route } from 'react-router-dom'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

jest.mock('axios')

const routerVersion = require('react-router-dom/package.json').version
const routerVersionNum = Number(routerVersion.split('.')[0])
console.log('routerVersion ->', routerVersion);

if (routerVersionNum === 6) {
  it('running react router V6', () => {
    expect(routerVersionNum).toBe(6)
  })
  describe("Pizza test, sprint 3 challenge", () => {
    it('Homepage at "/" route, has link or button with #order-pizza', () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/')
      const orderPizza = document.querySelector('#order-pizza')
      expect(orderPizza).toBeInTheDocument();
    })

    it('From homepage "/" route, click #order-pizza, navigate to "/pizza" route', () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/')
      const orderPizza = document.querySelector('#order-pizza')
      expect(orderPizza).toBeInTheDocument();
      fireEvent.click(orderPizza)
      console.log(document.body.innerHTML)
      expect(document.location.pathname).toBe('/pizza')
    });

    it('The "/pizza" route has a form with #pizza-form', () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const pizzaForm = document.querySelector('#pizza-form')
      expect(pizzaForm).toBeInTheDocument()
    });

    it('Form has name text input with #name-input', () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const nameInput = document.querySelector('#name-input')
      expect(nameInput).toBeInTheDocument()
    });

    it('Form has validation for #name-input with error message "name must be at least 2 characters"', async () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const nameInput = document.querySelector('#name-input')
      expect(nameInput).toBeInTheDocument()
      fireEvent.input(nameInput, { target: { value: 'a' } })
      await waitFor(() => {
        expect(screen.getByText('name must be at least 2 characters')).toBeInTheDocument()
      })
      nameInput.value = ''
    });

    it('Form has pizza size dropdown with #size-dropdown', () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const sizeDropdown = document.querySelector('#size-dropdown')
      expect(sizeDropdown).toBeInTheDocument()
    });

    it('Form has toppings checklist with at least 4 options', () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const toppingsChecklist = document.querySelectorAll('[type="checkbox"]')
      expect(toppingsChecklist.length).toBeGreaterThanOrEqual(4)
    });

    it('Form has special instructions input with #special-text', () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
      const specialInstructions = document.querySelector('#special-text')
      expect(specialInstructions).toBeInTheDocument()
    });

    it("Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders", async () => {
      window.history.pushState({}, '', '/pizza')
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      expect(document.location.pathname).toBe('/pizza')
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
        Promise.resolve({ testOrder })
      );
      const orderButton = document.querySelector('#order-button')
      userEvent.click(orderButton)
      expect(axios.post("https://reqres.in/api/orders", testOrder));
    });
  })
} else {
  const { createMemoryHistory } = require('history')
  it('running react router V5', () => {
    expect(routerVersionNum).toBe(5)
  })
  describe("Pizza test, sprint 3 challenge", () => {
    it('Homepage at "/" route, has link or button with #order-pizza', () => {
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

    it('From homepage "/" route, click #order-pizza, navigate to "/pizza" route', () => {
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

    it('The "/pizza" route has a form with #pizza-form', () => {
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

    it('Form has name text input with #name-input', () => {
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

    it('Form has validation for #name-input with error message "name must be at least 2 characters"', async () => {
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
        target: { value: 'a' }
      })
      await waitFor(() => {
        expect(screen.getByText('name must be at least 2 characters')).toBeInTheDocument()
      })
      nameInput.value = ''
    });

    it('Form has pizza size dropdown with #size-dropdown', () => {
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

    it('Form has toppings checklist with at least 4 options', () => {
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

    it('Form has special instructions input with #special-text', () => {
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

    it("Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders", async () => {
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
        Promise.resolve({ testOrder })
      );
      const orderButton = document.querySelector('#order-button')
      userEvent.click(orderButton)
      expect(axios.post("https://reqres.in/api/orders", testOrder));
    });
  });
}
