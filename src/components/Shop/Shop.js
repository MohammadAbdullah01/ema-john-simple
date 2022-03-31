import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStorageItems } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // video 3
    // const [products, setProducts] = useState([])
    const [products, setProducts] = useProducts()

    const [cartItems, setCartItems] = useState([])

    // video 3
    // useEffect(() => {
    //     fetch("products.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, [])


    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cartItems.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cartItems, selectedProduct]
        }
        else {
            const rest = cartItems.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        console.log(newCart)
        setCartItems(newCart)
        addToDb(selectedProduct.id)
    }

    // loading local storage's carts and showing default 
    // while comers come again 
    useEffect(() => {
        const StorageItems = getStorageItems();
        const savedCarts = []
        for (const id in StorageItems) {
            const storageProduct = products.find(product => product.id === id)
            if (storageProduct) {
                const quantity = StorageItems[id]
                storageProduct.quantity = quantity;
                savedCarts.push(storageProduct)
            }
        }
        setCartItems(savedCarts)
    }, [products])




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

                <Cart cartItems={cartItems}>
                    <Link to='/orders'>
                        <button>Order Review </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;