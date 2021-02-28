import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, stock} = props.product
    return (     
        <div className='product'>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <br/>
                <h3>Price: ${price}</h3>
                <br/>
                <p>Only {stock} left in stock -Order soon</p>
                <button className="cart-btn" onClick={() => props.handelAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> abb to cart</button>
            </div>
        </div>
    );
};

export default Product;
