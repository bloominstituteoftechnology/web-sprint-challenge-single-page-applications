import React from 'react';
import './input.css';

const Input = props => {
    if( props.type == 'text'){
    return(
        <>
        <label htmlFor={props.label}>
                <p>{props.label}</p>
                <input type={props.type} name={props.name} value={props.vale} onChange={props.onChange}/>
            </label>
        </>
    )}
    else if(props.type == 'checkbox'){
        return(
            <>
            <input type={props.type} name={props.name} value={props.vale} onChange={props.onChange}/>
            <span>{props.label}</span>
            </>
        )
    }
}

export default Input;