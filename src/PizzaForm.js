import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const PizzaForm = () => {

  const smPizza = 6.99;
  const mdPizza = 9.99;
  const lgPizza = 12.99;
  const xLgPizza = 15.99;
  const glutenFree = 1.00;
  let orderTotal = 0.00;

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
        <Container fluid>
          <form>
            {/* heading - Build Your Own Pizza */}
            <div><h5>Build Your Own Pizza</h5></div>
            <hr />
            {/* image */}
            

            {/* Choice of size - dropdown  required*/}
            <div>
              
              <div>
                <label>Choose a Size (required)
                  <div style={{ color: 'red'}}>
                    <div>{/*errors.role*/}</div>
                  </div>
                  <select>
                    <option value="">Select One</option>
                    <option value="1">Small (${smPizza})</option>
                    <option value="2">Medium (${mdPizza})</option>
                    <option value="3">Large (${lgPizza})</option>
                    <option value="4">X-Large (${xLgPizza})</option>
                  </select>
                </label>
              </div>
            </div>
            <hr />

            {/* Choice of sauce - Radio required */}
            <div>Choose a Sauce (required)</div>
            <div class="form-check">
              
              <input
                class="form-check-input"
                type="radio"
                name="originalRed"
                id="originalRed"
              />
              <label class="form-check-label" for="originalRed"> Original Red </label>
              </div>

              <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="garlicRanch"
                id="garlicRanch"
              />
              <label class="form-check-label" for="garlicRanch"> Garlic Ranch </label>
              </div>

              <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="bbqSauce"
                id="bbqSauce"
              />
              <label class="form-check-label" for="bbqSauce"> BBQ Sauce </label>
              </div>

              <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="spinachAlfredo"
                id="spinachAlfredo"
              />
              <label class="form-check-label" for="spinachAlfredo"> Spinch Alfredo </label>
              </div>
              <hr />

              <Container fluid>
                <Row>
                  <Col>
                  
                  </Col>
                  <Col>
                  
                  </Col>
                </Row>
              </Container>

            {/* Add Toppings - choose up to ten - checkbox - required*/}
            {/* Choice of substitute - choose upto 1 - not required gluten free crust +$1 */}
            {/* Special instructions - text area - not required */}
            {/* quantity */} {/* add to order - total */} 
          </form>
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default PizzaForm
