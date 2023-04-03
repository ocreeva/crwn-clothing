export const addItemToCart = (state, { payload: { productId } }) => {
    if (productId in state.items) {
        state.items[productId].quantity += 1;
    } else {
        state.items = { ...state.items, [productId]: { quantity: 1 } };
    }
};

export const clearItemFromCart = (state, { payload: { productId } }) => {
    if (!(productId in state.items)) return;
    delete state.items[productId];
};

export const removeItemFromCart = (state, { payload: { productId } }) => {
    if (!(productId in state.items)) return;
    state.items[productId].quantity -= 1;
    if (state.items[productId].quantity <= 0) {
        delete state.items[productId];
    }
};
