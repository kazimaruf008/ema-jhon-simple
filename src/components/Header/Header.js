import React from 'react';
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <a href="./shop">shop</a>
            <a href="./review">Review</a>
            <a href="./manage-inventory">Inventory</a>
            </nav>
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;