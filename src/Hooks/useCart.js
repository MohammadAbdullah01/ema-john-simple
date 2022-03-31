import { useEffect, useState } from "react"
import { getStorageItems } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const cartObj = getStorageItems()
        const cartItems = []
        for (const id in cartObj) {
            const findProduct = products.find(product => product.id === id)
            if (findProduct) {
                findProduct.quantity = cartObj[id]
                cartItems.push(findProduct)
            }
        }
        setCart(cartItems)

    }, [products]);
    return [cart, setCart]
}

export default useCart;