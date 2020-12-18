import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Navbar = () => {
  return (
    <header>

  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">LambdaEats</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Order Pizza</a>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
 

 
  <div className="p-5 text-center bg-image" style={{backgroundImage: "url('https://www.frozenfoodeurope.com/wp-content/uploads/2019/07/Pizza-Tech-678x381.jpg?x29101')", height: "400px", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
    <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
      <div className="d-flex justify-content-center align-items-flex-end h-100">
        <div className="text-white">
          
          <a className="btn btn-outline-dark btn-lg bg-light" href="#!" role="button"
            >Order Pizza</a
          >
        </div>
      </div>
    </div>
  </div>
 
</header>
  )
}

export default Navbar
