//creating a food delivery app
import React from 'react';
import ReactDOM from "react-dom";
import './style.css';

const Header =() =>{
    return (
    <div className ="header">
    <div className ="logo-container">
    <img  className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png" alt="logo"/>
    </div>
    <div className="nav-items">
    <ul>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
    </ul> 
    </div>
    </div>
    );
}
const Applayout =() =>{
    return (
    <Header/>
    );
    
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);
