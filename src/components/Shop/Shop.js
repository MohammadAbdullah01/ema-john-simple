import React, { useEffect, useState } from 'react';
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
        console.log(product)
        console.log(cartItems)
        const newCart = [...cartItems, product]
        setCartItems(newCart)
    }
    console.log(cartItems.length)


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