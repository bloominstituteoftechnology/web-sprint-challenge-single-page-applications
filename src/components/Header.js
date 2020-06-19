import React from 'react';

export default function Header() {
    return (
        <div>
            <nav className='uk-navbar-container uk-navbar'>
                <div className='uk-navbar-left'>
                    <a className="uk-navbar-item uk-logo" href="#">Lambda Eats</a>
                    <ul className='uk-navbar-nav'>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Order</a></li>
                    </ul>

                </div>
                <div className='uk-navbar-right'>

                    <ul className='uk-navbar-nav'>
                        <li>
                            <a href='#'>Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}