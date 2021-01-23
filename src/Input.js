import './App.css';
import React, { useState } from 'react';
// import * as yup from 'yup';




export default function Input(props) {
  return (

    <label htmlFor="name">
      {`${props.label} `}
      <input {...props}/>
    </label>

  )
}
