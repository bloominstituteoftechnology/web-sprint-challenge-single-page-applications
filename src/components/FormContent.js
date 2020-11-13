import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { isInteger } from "cypress/types/lodash";

const StyledForm = styled.div`
  text-align: center;
`;

const schema = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be more than 2 characters'),
    sauce: yup.string().oneOf(['marinara', 'pesto', 'alfredo', 'pumpkin'])
    

function FormContent(props) {
  const [formData, setFormData] = useState({
    name: "",
    sauce: "",
    toppings: {
      cheese: false,
      greenPeppers: false,
      pineapple: false,
      spinach: false,
      hamburg: false,
      sausage: false,
    },
    glutenFree: false,
    specialRequests: "",
    numberOfItems: 1,
  })
    
    
    
export default FormContent 