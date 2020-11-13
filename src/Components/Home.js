// imports
import React from 'react';
import {useHistory} from 'react-router-dom';


export default function Home(props) { 
    const history = useHistory(); 


    const routeToOrder = () => { 
        console.log(history, "HISTORY");
        history.push('/pizza'); 
    }
    
    return (
        <div className="home-wrapper"> 
            <img   
                className="jumbo-image"
                src="https://images.getbento.com/accounts/218d4ffbb37dd2996ba53d258951a956/media/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg?fit=max&w=1800&auto=format,compress"   
                alt="picture of pizza"
                width='100%'
            />       

            <button onClick={routeToOrder} className="md-button order-button">Order Now</button>
        </div>
    );
}