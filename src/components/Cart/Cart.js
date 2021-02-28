import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 12.99
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Order Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
        </div>
    );
};

export default Cart;