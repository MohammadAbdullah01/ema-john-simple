import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.children)
    const { cartItems } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cartItems) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const GrandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${GrandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;