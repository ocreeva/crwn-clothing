import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleIsCartOpen: () => null,
    items: [],
    addItemToCart: (id) => null,
    removeItemFromCart: (id) => null,
    clearItemFromCart: (id) => null,
});

const _addItemToItems = (id, items) => {
    const item = items.find(i => i.id === id);
    if (!item) {
        return [ ...items, { id, quantity: 1 } ];
    }

    item.quantity += 1;
    return [ ...items ];
};

const _removeItemFromItems = (id, items) => {
    const item = items.find(i => i.id === id);
    if (!item) {
        return items;
    }

    item.quantity -= 1;
    if (item.quantity) {
        return [ ...items ];
    }

    return items.filter(_ => _.id !== id);
};

const _clearItemFromItems = (id, items) => {
    return items.filter(_ => _.id !== id);
};

export const CartProvider = ({ children }) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const [ items, setItems ] = useState([]);
    const addItemToCart = (id) => setItems(_addItemToItems(id, items));
    const removeItemFromCart = (id) => setItems(_removeItemFromItems(id, items));
    const clearItemFromCart = (id) => setItems(_clearItemFromItems(id, items));

    const value = { isCartOpen, toggleIsCartOpen, items, addItemToCart, removeItemFromCart, clearItemFromCart };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}

export default CartContext;
