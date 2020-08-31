import React, { useState, useEffect } from "react"
import * as yup from "yup";
import axios from "axios";


export default function SignupForm (){

const [signupState, setSignupForm] = useState ({
    firstName:"",
    lastName:"",
    createUsername:"",
    createPassword:"",
    verifyPassword:""
});

const [errors, setErrors] = useState ({
    firstName:"",
    lastName:"",
    createUsername:"",
    createPassword:"",
    verifyPassword:""
});
    
const [buttonDisabled, setButtonDisabled] = useState(true);

const validateChange = e =>{
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid =>{
        setErrors({...errors,[e.target.name]: ""})
        console.log("success")
    })
    .catch(err => {
        setErrors({...errors,[e.target.name]: err.errors[0]});
        console.log("error:",err);
  
      });
};

const formSchema =yup.object({
    firstName:yup
    .string()
    .required("First name is required")
    .min(2, "Minimum two characters"),
    lastName:yup
    .string()
    .required("First name is required")
    .min(2, "Minimum two characters"),
    createUsername: yup
    .string()
    .required("username is required"),
    createPassword : yup
    .string()
    .required("password is required"),
    verifyPassword: yup
    .string()
    .required("please verify password")
})

useEffect(() =>{
    if(signupState.verifyPassword.length < 3){
        setButtonDisabled(true);
    }else{setButtonDisabled(false)}
},[signupState])


  const signup = e =>{
      e.preventDefault();
      console.log("sign up success")
      axios
      .post("https://med-cab-2020-api.herokuapp.com/register",signupState)
        .then(res => {
        console.log("success!",res.data);

        setSignupForm({
            firstName:"",
            lastName:"",
            createUsername:"",
            createPassword:"",
            verifyPassword:""
        });
    })
    .catch(err => console.log(err.response));

  }
 
  const inputChange = e =>{
    e.persist();
    console.log("something changed")
    const signupForm ={
        ...signupState, [e.target.name]:e.target.value
    } 
    console.log(signupForm)
    setSignupForm(signupForm)
    validateChange(e)
}
return(
    <form onSubmit={signup}>
        <h1>Sign up</h1>
        <label htmlFor='firstName'>
            <input
                type='text'
                name='firstName'
                placeholder="First Name"
                value={signupState.firstName}
                onChange={inputChange}
                />
            </label>  
            {errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}
            <label htmlFor='lastName'>
            <input
                type='text'
                name='lastName'
                placeholder="Last Name"
                value={signupState.lastName}
                onChange={inputChange}
                />
            </label>  
            {errors.lastName.length > 0 ? <p className="error">{errors.lastName}</p> : null}

            
            
        <label htmlFor='createUsername'>
            <input
                type='text'
                name='createUsername'
                placeholder="Create Username"
                value={signupState.createUsername}
                onChange={inputChange}
                />
            </label>  
            {errors.createUsername.length > 0 ? <p className="error">{errors.createUsername}</p> : null}

            <label htmlFor='createPassword'>
            <input
                type='password'
                name='createPassword'
                placeholder="Create Password"
                value={signupState.createPassword}
                onChange={inputChange}
                />
            </label>
            {errors.createPassword.length > 0 ? <p className="error">{errors.createPassword}</p> : null}

            <label htmlFor='verifyPassword'>
            <input
                type='password'
                name='verifyPassword'
                placeholder="Verify Password"
                value={signupState.verifyPassword}
                onChange={inputChange}
                />
            </label>
            {errors.verifyPassword.length > 0 ? <p className="error">{errors.verifyPassword}</p> : null}

            <button disabled = {buttonDisabled} type = "submit" data-cy = "submit" >Sign Up</button>
 </form>
)
}





