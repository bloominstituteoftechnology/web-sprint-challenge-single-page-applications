import React from "react";
// import styled from "styled-components";
import "./index.css";


function OrderForm() {
    return (
        <div className="orderform">
            <form>
                <label htmlFor='fnameInput'>First Name</label>
                <input 
                maxLength="30"
                placeholder="First Name"
                id="fnameInput"
                name="fname"
                type="text"
                />
                <br />
                <label htmlFor='lnameInput'>Last Name</label>
                <input 
                maxLength="30"
                placeholder="Last Name"
                id="lnameInput"
                name="lname"
                type="text"
                />
                

            </form>
        </div>
    );
}


export default OrderForm;