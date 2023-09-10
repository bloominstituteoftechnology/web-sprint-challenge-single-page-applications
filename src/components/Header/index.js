
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "./index.css";

export default function Index() {
  let location = useLocation();
  return (
    <div className='App-header'>
        <p className="App-title">LAMBDA EATS</p>
        <div className="Nav-wrapper">
            <Link to="/" className={`Nav-btn ${location.pathname === "/" ? "Nav-btn-active" : ""}`}>Home</Link>
            <Link to="/help" className={`Nav-btn ${location.pathname === "/help" ? "Nav-btn-active" : ""}`}>Help</Link>
        </div>
    </div>
  )
}
