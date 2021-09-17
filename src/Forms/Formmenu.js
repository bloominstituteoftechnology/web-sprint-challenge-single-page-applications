import React from "react";
import Form from "./Form";
import pic from "./pizza-pizza-filled-with-tomatoes-salami-olives.jpg";
function Formmenu() {
  return (
    <div class="source">
      <div class="headingstyle">
        <header>
          <title>Site Title</title>
          <h2>LAMBDA EATS</h2>

          <div class="navigation">
            <nav>
              <button class="button">
                <a href="/Formmenu/Formmenu.js">Home</a>
              </button>
              <button class="button">
                <a href="/">Order</a>
              </button>
            </nav>
          </div>
        </header>
      </div>
      <body>
        <div class="body-begin">
          <img src={pic} />
          <div class="centered">
            <h1> YOUR FAVOURITE FOOD, DELIVERED WHILE CODING</h1>
            <button>
              <a class="cta" href="/">
                Pizza
              </a>
            </button>
          </div>
        </div>
        <section>
          <h2>Food Delivery in Gotham City</h2>
          <div class="organize">
            <div class="container">
              <div class="middle">
                <button>$10.90</button>
              </div>
              <div class="image">
                <div class="boxOne"></div>
              </div>
            </div>
            <div class="container">
              <div class="middle">
                <button>$10.90</button>
              </div>
              <div class="image">
                <div class="boxTwo "></div>
              </div>
            </div>
            <div class="container">
              <div class="middle">
                <button>$10.90</button>
              </div>
              <div class="image">
                <div class="boxThree"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="reorganize">
              <div class="container">
                <div class="middle">
                  <button>$10.90</button>
                </div>
                <div class="image">
                  <div class="boxFour"></div>
                </div>
              </div>
              <div class="container">
                <div class="middle">
                  <button>$10.90</button>
                </div>
                <div class="image">
                  <div class="boxFive"></div>
                </div>
              </div>
              <div class="container">
                <div class="middle">
                  <button>$10.90</button>
                </div>
                <div class="image">
                  <div class="boxSix"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>

      <footer>
        <div class="foot">
          <h2>Need Help?</h2>
          <p>
            Contact:
            <a href="+1(513)3046167">+1(513)3046167</a>
            <br />
            Email:
            <a href="pizzahome@gmail.com">pizzahome@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Formmenu;
