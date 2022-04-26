import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStorageItems } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cartItems, setCartItems] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [activePage, setActivePage] = useState(0)
    const [userSelectedPages, setUserSelectedPages] = useState(5)

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${activePage}&size=${userSelectedPages}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activePage, userSelectedPages])


    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cartItems.find(product => product._id === selectedProduct._id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cartItems, selectedProduct]
        }
        else {
            const rest = cartItems.filter(product => product._id !== selectedProduct._id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCartItems(newCart)
        addToDb(selectedProduct._id)
    }


    // useEffect(() => {
    //     const StorageItems = getStorageItems();
    //     const savedCarts = []
    //     for (const id in StorageItems) {
    //         const storageProduct = products.find(product => product._id === id)
    //         if (storageProduct) {
    //             const quantity = StorageItems[id]
    //             storageProduct.quantity = quantity;
    //             savedCarts.push(storageProduct)
    //         }
    //     }
    //     setCartItems(savedCarts)
    // }, [products])


    useEffect(() => {
        fetch("http://localhost:5000/productquantity")
            .then(res => res.json())
            .then(data => {
                const product = data.count;
                const page = Math.ceil(product / 10)
                setPageCount(page)
            })
    }, [])


    return (
        <div className='shop'>
            <div className='products-container'>
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                    addToCart={addToCart}
                ></Product>)}
                <div className='pagination'>
                    {[...Array(pageCount).keys()].map(number => <button className={`${number === activePage && 'active-page'}`} onClick={() => setActivePage(number)}>{number}</button>)}
                    <span>
                        <select onChange={e => setUserSelectedPages(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" defaultValue>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </span>
                </div>

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