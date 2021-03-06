import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {

    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart()

    const handleRemoveItem = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }

    return (
        <div>
            <div className="shop">
                <div className="review-items-container">
                    {cart.map(product => <ReviewItem
                        handleRemoveItem={handleRemoveItem}
                        product={product}
                        key={product._id}
                    ></ReviewItem>)}
                </div>
                <div className="cart-container">
                    <Cart
                        cartItems={cart}
                    >
                        <Link to={'/shipment'}>
                            <button>Go to Shipment</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;