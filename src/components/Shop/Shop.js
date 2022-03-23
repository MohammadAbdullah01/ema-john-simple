import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cartItems, product]
        setCartItems(newCart)
        addToDb(product.id)
    }


    return (
        <div className='shop'>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                ></Product>)}
            </div>
            <div className='cart-container'>

                <Cart cartItems={cartItems}></Cart>
            </div>
        </div>
    );
};

export default Shop;