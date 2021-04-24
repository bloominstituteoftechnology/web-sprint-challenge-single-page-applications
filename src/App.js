  import App from './App.css'
 import React, {useState, useEffect} from "react"
  import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
  import * as Yup from "yup";
   import axios from "axios"
  import Nav from  "./nav"     
  import Form from "./Form"
                  

                                                

                             

    const Apps = () => {
                         
                        
                        
                         
                     //JSX
                           return (
                         
                          
                               <div className="APP">
                                <Nav/> 
                                   <header className= "Heads">
                                 <Switch>
                                                                            
                            
                                 <Route path= "/shop" component = {Form}/>        
                                      </Switch>"
                                                                 
                                       </header>
                                                             
                                                                                 
                                       </div>     
                                                                          
                                                  );
                                                        
                                                  };
                                                                             
                         
                                
                         
       export default Apps   
                                                                       
                             
         
         
         
                            
                             
                              
 


                               
                               
                               
                               
                      
                      
                                 
                             
          
                                    
  


