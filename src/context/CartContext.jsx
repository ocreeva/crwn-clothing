import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleIsCartOpen: () => null,
    items: [],
    addItemToCart: (id) => null,
});

const _addItemToItems = (id, items) => {
    const item = items.find(i => i.id === id);
    if (!item) {
        return [ ...items, { id, quantity: 1 } ];
    }

    item.quantity += 1;
    return [ ...items ];
}

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const [ items, setItems ] = useState([]);
    const addItemToCart = (id) => setItems(_addItemToItems(id, items));

    const value = { isCartOpen, toggleIsCartOpen, items, addItemToCart };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}

export default CartContext;
