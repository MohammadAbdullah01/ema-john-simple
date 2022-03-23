import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h1>{cartItems.length}</h1>
        </div>
    );
};

export default Cart;