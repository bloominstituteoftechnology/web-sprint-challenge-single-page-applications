import React from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {

  const history = useHistory()

  const routeToPizza = () => {
    history.push('/pizza')
  }

    return (
      <div>
        <img
        className className='home-image'
        src='./pizza.jpg'
        alt=''
        />
        <div className="button-div">
        <button
        onClick={routeToPizza}
        className='pizza-button'
        >
        Build Pizza!
        </button>
        </div>
        <div className="pic-div">
          <div>
            <img src="https://picsum.photos/200"></img>
            <h2>McDonalds</h2>
            <h3>$ American Fast Food</h3>
            <h4>30-40 Min</h4>
            <h4>$5.99 delivery fee</h4>
          </div>
          <div>
          <img src="https://picsum.photos/200"></img>
            <h2>McDonalds</h2>
            <h3>$ American Fast Food</h3>
            <h4>30-40 Min</h4>
            <h4>$5.99 delivery fee</h4>
          </div>
          <div>
          <img src="https://picsum.photos/200"></img>
            <h2>McDonalds</h2>
            <h3>$ American Fast Food</h3>
            <h4>30-40 Min</h4>
            <h4>$5.99 delivery fee</h4>
          </div>
        </div>
      </div>
    );
}

export default Home;