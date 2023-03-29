import * as cartType from "./cart.type";

const initialState = {
    isDropdownOpen: false,
    items: [],
};

const addItemToItems = (id, items) => {
    const item = items.find(i => i.id === id);
    if (!item) {
        return [ ...items, { id, quantity: 1 } ];
    }

    item.quantity += 1;
    return [ ...items ];
};

const removeItemFromItems = (id, items) => {
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

const clearItemFromItems = (id, items) => {
    return items.filter(_ => _.id !== id);
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case cartType.toggleDropdown:
            return { ...state, isDropdownOpen: !state.isDropdownOpen };

        case cartType.addItem:
            return { ...state, items: addItemToItems(payload, state.items) };

        case cartType.clearItem:
            return { ...state, items: clearItemFromItems(payload, state.items) };

        case cartType.removeItem:
            return { ...state, items: removeItemFromItems(payload, state.items) };

        default:
            return state;
    }
}

export default cartReducer;
