import React,{useState, useEffect} from "react";
import * as Yup from "yup";
import axios from "axios";

function Confirm(){

    const [confirmState,setConfirmState]=useState({
        name:'',
        email:''
    });

    const [errors,setErrors]=useState({
        name:'',
        email:''
    });

    const [buttonDisabled,setButtonDisabled]=useState(true);

    const formSchema=Yup.object().shape({
        name: Yup
            .string()
            .required('Must include a Name.')
            .min(2,"Your name cant be that short!"),
        email: Yup
            .string()
            .email('Must be a valid email address.')
            .required('Must include and email address')
    })
    const [post, setPost] = useState([]);

    useEffect(()=>{
        formSchema.isValid(confirmState).then(valid=> setButtonDisabled(!valid));},[confirmState]);
    
        const inputChange = e => {
        e.persist();

        Yup
        .reach(formSchema,e.target.name)
        .validate(e.target.value)
        .then(valid=>{setErrors({...errors,[e.target.name]:''});})
        .catch(err=>{setErrors({...errors,[e.target.name]:err.errors[0]});})
        setConfirmState({
            ...confirmState,[e.target.name]:e.target.value
        });
      };

    const formSubmit=e=>{
        e.preventDefault();
        console.log('submitted');
        axios
            .post('https://reqres.in/api/users', confirmState)
            .then((res)=>{ 
                setPost(res.data);
                console.log('Form submitted successfully!',res)
            })
            .catch(err=>console.log(err))
    };



  
    return(
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="nameInput">Name
                    <input 
                        type='text'
                        placeholder='Full Name' 
                        name='name' 
                        id='nameInput' 
                        error={errors}
                        value={confirmState.name} 
                        onChange={inputChange}
                        />
                        {errors.name.length<2 ? <p>{errors.name}</p> : null}
                </label><br></br>
                <label htmlFor="mailInput">Email
                    <input 
                        type='text'
                        placeholder='Email' 
                        name='email' 
                        id='emailInput' 
                        error={errors}
                        value={confirmState.email} 
                        onChange={inputChange}
                        />
                </label><br></br>
                <pre>{JSON.stringify(post, null, 2)}</pre>

                <button 
                disabled={buttonDisabled}
                >Place your Order</button>
            </form>
        </div>
        
    )
}

export default Confirm;