import { useEffect, useState } from "react"
import { getStorageItems } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const cartObj = getStorageItems()
        const cartItems = []

        // just send keys
        const keys = Object.keys(cartObj)
        fetch("http://localhost:5000/productsByKeys", {
            method: "post",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products)
                //
                for (const id in cartObj) {
                    const findProduct = products.find(product => product._id === id)
                    if (findProduct) {
                        findProduct.quantity = cartObj[id]
                        cartItems.push(findProduct)
                    }
                }
                setCart(cartItems)
                //
            })
        //



    }, []);
    return [cart, setCart]
}

export default useCart;