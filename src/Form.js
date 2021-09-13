import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

const Form = () => {
  const [food, setFood] = useState({
    name: "",
    size: "",
    cheese: false,
    ham: false,
    pepperoni: false,
    sausage: false,
    mushroom: false,
    pineapple: false,
    specialInstructions: "",
  });

  const {
    name,
    size,
    cheese,
    ham,
    pepperoni,
    sausage,
    mushroom,
    pineapple,
    specialText,
  } = food;
  const [orderConfirmed, setOrderConfirmed] = useState(false);
};
