import React from "react";

export default function Header(props){
    return (
        <header>
            <p className="logo">LAMBDA EATS</p>
            <ul className="links">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/help">
                    <li>Help</li>
                </a>
            </ul>
        </header>
    )
}