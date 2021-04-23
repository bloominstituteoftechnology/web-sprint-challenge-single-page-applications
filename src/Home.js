import React from "react";
import { useHistory } from "react-router-dom";


export default function Home (){
    const history = useHistory();

    // Functions:
    const routeToOrder = ()=>{
        history.push('/order');
    }

    return (
        <div className ="homeContainer">
            {/* Background Img */}
            <img className ="homeImage" src ="https://pwpizza.com/wp-content/uploads/2019/05/pw_pizza_home_hero-2-1024x682.jpg" alt ="pizza"/>
            {/* Order Btn */}
            <button onClick = {routeToOrder} className ="orderBtn">Order Now!</button>
            {/* About Us */}
            <div className ="home-body">
                <div>
                    <h2>About Us</h2>
                </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit sed sem scelerisque interdum. Aenean vestibulum urna vel euismod blandit. Nulla id tempor sapien. Praesent hendrerit feugiat ex, eu scelerisque justo pharetra quis. Vestibulum consequat sapien eu neque tempor, ut tempor diam ullamcorper. Praesent hendrerit, nisl ac congue elementum, sem libero semper sem, vitae efficitur ex lectus quis metus. Sed posuere nulla viverra, porttitor sem a, porttitor arcu. Donec convallis diam eget sapien cursus, vitae vehicula massa fringilla. Cras ultrices, elit et lobortis maximus, ligula lectus efficitur nulla, sit amet egestas ante sapien ac dui. Vestibulum malesuada, felis non posuere fringilla, tortor lectus vestibulum nisl, ac vestibulum diam lacus eget augue.

                    Nunc vel elit vel mauris ultrices euismod. Suspendisse et volutpat nunc. Sed ornare nulla eros, eu tempus tellus semper vitae. Mauris dignissim ante diam, vitae fringilla risus consectetur a. Nulla vel justo massa. Morbi ultrices, ipsum ac eleifend porta, est urna condimentum diam, sit amet maximus urna nunc sit amet mauris. Donec et dui pulvinar, tristique odio vel, dapibus tellus. Duis varius, massa sed fermentum efficitur, quam lectus cursus lacus, viverra accumsan augue justo maximus quam. Ut imperdiet euismod tellus sed congue. Fusce tortor mi, interdum a dolor sagittis, faucibus mollis metus. Duis commodo nisl ullamcorper nunc bibendum, non accumsan odio ornare. Aenean odio lectus, mattis suscipit libero at, posuere consequat ipsum. Cras pretium vehicula lectus, vel porttitor lectus pretium vel. Aliquam luctus dui nec cursus elementum. Aliquam feugiat mauris at fringilla fermentum.</p>
            </div>

        </div>
    )
}
