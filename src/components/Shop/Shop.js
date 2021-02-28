import React, { useState } from 'react';
import fakeData from "../../fakeData";
import "./shop.css";
import Product from "../Product/Product"
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState(fakeData)
    const [cart, setCart] = useState([])
    const handelAddProduct = (product) =>{
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => 
                    <Product handelAddProduct={handelAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
