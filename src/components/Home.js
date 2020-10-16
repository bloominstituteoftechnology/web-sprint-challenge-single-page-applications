import React from 'react';

const Home = () => {

    return (
      <div>
        <img
        className className='home-image'
        src='./pizza.jpg'
        alt=''
        />
        <button
        className='pizza-button'
        >
        Build Pizza!
        </button>
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