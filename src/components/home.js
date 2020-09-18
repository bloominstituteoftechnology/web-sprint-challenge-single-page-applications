import React from 'react'
import {Link} from 'react-router-dom'

export default function Home (){
    return(
<>

<section className = 'mainbody'>
<div>
  <h1>Your favorite food delivered while coding</h1>
  <button><Link to = '/pizza'>Order Pizza!</Link></button>
</div>
</section>
<section className = 'lowerbody'>
<h3>Food Delivery In Chicago</h3>
<div className = "image container">
  <div>
     <img/> 
   </div>
  <div> 
     <img/> 
   </div>
  <div> 
     <img/> 
  </div>
  <div> 
     <img/> 
   </div>
   <div> 
      <img/> 
   </div>
   <div> 
     <img/> 
   </div> 
 </div> 
 </section> 
</>
    )
}
