  
import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';

const Form = (props) => {

    const defaultState = {
        name: "",
        pizzaSize: "",
        pizzaSauce: "",
        pepperoni: false,
        onions: false,
        sausage: false,
        olives: false,
        instructions:"",
    };

    