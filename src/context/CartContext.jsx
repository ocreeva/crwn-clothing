import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleIsCartOpen: () => null,
    items: [],
    setItems: () => null,
});

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ items, setItems ] = useState([]);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const value = { isCartOpen, toggleIsCartOpen, items, setItems };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}

export default CartContext;
