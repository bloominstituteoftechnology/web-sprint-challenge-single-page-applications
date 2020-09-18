import React from "react";
import PizzaForm from './components/form'
import Navigation from './components/navigation'
import Footer from './components/footer'

const App = () => {

  return (
    <>
    <Navigation/>
    <section className = 'mainbody'>
      <div>
        <h1>Your favorite food delivered while coding</h1>
        <button>Order Pizza!</button>
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
    <Footer/>
    </>
  );
};
export default App;
