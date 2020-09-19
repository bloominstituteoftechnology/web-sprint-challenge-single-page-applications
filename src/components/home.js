import React from 'react'
import {Link} from 'react-router-dom'
import burger from '../imgs/burger.jpg'
import chickenburger from '../imgs/chickenburger.jpg'
import pancakes from '../imgs/pancakes.jpg'
import styled from 'styled-components'

const ImageStyling = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`

const Images = styled.img `
width: 30%;

`
const Header = styled.div `
text-align: center;

`

const MiddleHeader = styled.h3 `
  margin-left: 2%;
`

export default function Home (){
    return(
<>

<section className = 'mainbody'>
<Header>
  <h1>Your favorite food delivered while coding</h1>
  <button><Link to = '/pizza'>Order Pizza!</Link></button>
</Header>
</section>
<section className = 'lowerbody'>
<MiddleHeader>Food Delivery In Chicago</MiddleHeader>
<ImageStyling className = "image container">

     <Images src={burger} alt="burger"/> 
     <Images src = {pancakes} alt = "salad"/> 
     <Images src = {chickenburger} alt = "steak"/> 
 </ImageStyling> 
 </section> 
</>
    )
}
