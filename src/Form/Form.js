
import React,  { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios'
import { BrowserRouter as Route, Link, useRouteMatch } from 'react-router-dom'
// import React, from 'react'
import Fbtn from './Fbtn';
import Ordered from '../Ordered/Ordered';

const Form = (props) =>{
    const [order,setOrder] = useState({name: "", Psize: "",
                pep: "",pine: "", olive:"", sardines:""})
    const [sub,setSub] = useState(false)
    const {url,path} = useRouteMatch();

    const changeit = (ev) =>{
        ev.persist();
        const ch= {...order,[ev.target.name]: ev.target.value};
        setOrder(ch);
        console.log('change')
        console.log(order);
    };

   
    const handleSubmite = (e) =>{
        // e.preventDefault();

        if(sub === false){
            e.preventDefault();
            setSub(true);
        axios.post(`${path}/pizza`,order)
        .then(evn =>{
            // debugger;
            console.log('ev')
            console.log(evn);
            // setRes(evn);
            

        })
        .catch(er =>{
            console.log(er);
        })
        }else{
            console.log('went false');

            setSub(false);
        }
            
            
    };

    
    return (
        sub
        ?
        <Route history={props.history}  path={`${path}pizza/:ordered`} render={(props) => <Ordered order={order} />} />
                :
        <div className="App">
            <label htmlFor={"oForm"}>Lambda EEtz: Order Form</label>
            <form name="oForm" className="App" onSubmit={e => handleSubmite(e)}>
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
                <Link to={`${url}/pizza`} >
                    
                <Fbtn />
                </Link>
               
            </form>
            
        </div>
    );
}

export default Form;

