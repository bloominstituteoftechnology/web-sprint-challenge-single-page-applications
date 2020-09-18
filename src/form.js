import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as yup from 'yup'
import formschema from './formschema'
// import {Link, useHistory} from 'react-router-dom'

const initial = {
    name:'',
    topping1:false,
    topping2:false,
    topping3:false,
    topping4:false,
    specInst:'',
}
const errors = {
    name:'',
    topping1:'',
    topping2:'',
    topping3:'',
    topping4:'',
    specInst:'',
}

const Pizza = (props) =>{
    const {order, setOrder} = props
    const [content, setContent] = useState(initial)
    const [contentError,setContentError] = useState(errors)
    const [disb,setdisb] = useState(true)

    function handleC(event){
        const {name,value} = event.target
            yup
            .reach(formschema,name)
            .validate(value)
            .then(valid => {
                setContentError({
                    ...contentError, 
                    [name]:'',
                })
                
            })
            .catch(error => {
                setContentError({
                    ...contentError,
                    [name]:error.errors[0]
                })
            })
    
            setContent({
                ...content,
                [name]:value,
            })
        }
    
        function handleBox(event){
            const {name, checked} = event.target
            setContent({
                ...content,
                [name]:checked,
            })
        }
    function Submit(event){
        event.preventDefault()
        const newOrder = {
            name:content.name.trim(),
            specInst:content.specInst.trim(),
        }
        if(!newOrder.name||!newOrder.specInst)
        {return}
        setContent(initial)
        postOrder(newOrder)
    }
    const postOrder = (useOrder) => {
        axios.post(useOrder)
        .then(response => {
            console.log(response)
        })
    }
    return(
<p> working</p>
)
})
export default Pizza;