import { createContext, useReducer } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    toggleIsCartOpen: () => null,
    items: [],
    addItemToCart: (id) => null,
    clearItemFromCart: (id) => null,
    removeItemFromCart: (id) => null,
});

const cartActions = Object.freeze({
    update: Symbol("update"),
});

const cartReducerInitial = {
    isCartOpen: false,
    items: [],
};

const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case cartActions.update:
            return { ...state, ...payload };

        default:
            throw new Error(`Unhandled type (${type}) in cartReducer`);
    }
}

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
    const [ { isCartOpen, items }, cartDispatch ] = useReducer(cartReducer, cartReducerInitial);

    const toggleIsCartOpen = () => cartDispatch({ type: cartActions.update, payload: { isCartOpen: !isCartOpen } });

    const addItemToCart = (id) => cartDispatch({ type: cartActions.update, payload: { items: _addItemToItems(id, items) } });
    const clearItemFromCart = (id) => cartDispatch({ type: cartActions.update, payload: { items: _clearItemFromItems(id, items) } });
    const removeItemFromCart = (id) => cartDispatch({ type: cartActions.update, payload: { items: _removeItemFromItems(id, items) } });

    const value = { isCartOpen, toggleIsCartOpen, items, addItemToCart, clearItemFromCart, removeItemFromCart };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}

export default CartContext;
