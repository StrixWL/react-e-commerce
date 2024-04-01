import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(true)
    const toggleCart = () => setShowCart(!showCart)
    return (
        <CartContext.Provider value={{showCart, toggleCart}}>
            {children}
        </CartContext.Provider>
    )
}