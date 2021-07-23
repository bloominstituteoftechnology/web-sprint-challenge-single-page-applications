import React from "react";
import Form from "./Form";

function Formmenu() {
  return (
    <div>
      <Form>
        <input type="radio" id="Garlic" name="sauce" value="Garlic Ranch" />
        <label for="Garlic Ranch">Garlic Ranch</label>
        <br />
        <input type="radio" id="order-pizza" name="sauce" value="BBQ Sauce" />
        <label for="BBQ Sauce">BBQ Sauce</label>
        <br />
      </Form>
    </div>
  );
}

export default Formmenu;
