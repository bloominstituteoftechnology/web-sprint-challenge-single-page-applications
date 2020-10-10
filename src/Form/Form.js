
import React,  { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
// import React, from 'react'
import Fbtn from './Fbtn';

const Form = () =>{
    const [order,setOrder] = useState({name: "", Psize: "",
                pep: "",pine: "", olive:"", sardines:""})
    const [sub,setSub] = useState(false)

    const changeit = (ev) =>{
        ev.persist();
        const ch= {...order,[ev.target.name]: ev.target.value};
        setOrder(ch);
        console.log('change')
        console.log(order);
    };

   
    const handleSubmite = (e) =>{
        e.preventDefault();

        if(sub === false){
            setSub(true);
        axios.post(`https://localhost:3000/pizza`,order)
        .then(evn =>{
            // debugger;
            console.log('ev')
            console.log(evn);
            // setRes(evn);
            

        })
        .catch(er =>{
            console.log(er);
        })
        }else
            setSub(false)
            
            
    };

    
    return (
        <div className="App">
            <form className="App" onSubmit={e => handleSubmite(e)}>
                <label htmlFor="name">Name</label>
                <input onChange={e =>{changeit(e)}}type="text" name="name" />
                <label htmlFor="Psize">Size</label>
                <select name="Psize" required>
                    <option value="XXL">XXL</option>
                    <option value="Large">Large</option>
                    <option value="Small">SMall</option>
                </select>
                <label htmlFor="pep">Pepperronie</label>
                <input type="checkbox" name="pep" />
                <label htmlFor="pine">Pineapple</label>
                <input type="checkbox" name="pine" />
                <label htmlFor="olive">Olive</label>
                <input type="checkbox" name="olive" />
                <label htmlFor="sardines">Sardines</label>
                <input type="checkbox" name="sardines" />
                <label htmlFor="order">Order Now</label>
                <Link to="/pizza/:order">
                    
                <Fbtn type="submit" name="order" />
                </Link>

            </form>
        </div>
    );
}

export default Form;

