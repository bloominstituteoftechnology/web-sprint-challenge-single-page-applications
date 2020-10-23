import React from "react"
import img from '../Assets/Pizza.jpg'
import styles from 'styled-components'

const Home = () => {
    
 
    return(
        <Styles>
            <h2>Your favorite food delieverd while coding</h2>
         <Button>Pizza?</Button>
         
         <img className="logo" src={img} alt=""></img>
         



           
        </Styles>
    )
}
const Button = styles.button`
width:20%;
margin:auto;
`

const Styles = styles.div`
width:45%;
display: flex;
flex-flow:column;
  justify-content: center;
  margin:auto;
  border:2px solid purple;
  
  
`
export default Home