import React, { useState,useEffect } from "react"
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom"

export default function LoginForm (){

const [loginState, setLoginForm] = useState ({
    username:"",
    password:""
});

const [errors, setErrors] = useState ({
    username:"",
    password:""
});
    
const [buttonDisabled, setButtonDisabled] = useState(true);

const formSchema =yup.object().shape({
    username: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .required("Must include username."),
    password : yup
    .string()
    .required("Password is required")
})


const validateChange = e =>{
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
      setLoginForm({
          ...loginState,
          [e.target.name]:e.target.value
      })
}

useEffect(() =>{
    if(loginState.username.length <3){
        setButtonDisabled(true);
    }else{setButtonDisabled(false)}
},[loginState])


  const login = e =>{
      e.preventDefault();
      console.log("login success")
      axios
      .post("https://med-cab-2020-api.herokuapp.com/login",loginState)
        .then(res => {
        console.log("success!",res.data);

        setLoginForm({
            username:"",
            password:""
        });
    })
    .catch(err => console.log(err.response));
  }
  const inputChange = e =>{
    e.persist();
    console.log("something changed")
    const loginForm ={
        ...loginState, [e.target.name]:e.target.value
    } 
    console.log(loginForm)
    setLoginForm(loginForm)
    validateChange(e)
}
  


return(
    <form onSubmit={login}>
        <h1>Login</h1>
        <label htmlFor='username'> 
            <input
                type='text'
                placeholder="Username"
                name='username'
                value={loginState.username}
                onChange={inputChange}
                />
            </label>  
            {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}

            <label htmlFor='password'> 
            <input
                type='password'
                name='password'
                placeholder="Password"

                value={loginState.password}
                onChange={inputChange}
                />
            </label>  
            {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}

            <button disabled = {buttonDisabled} type = "submit">Login</button>
            
            <div className="sign-up-link"> 
                <h4>Don't have an account?</h4>     
                <Link to ="/signup">Sign Up</Link>
            </div>
 </form>
)
}
