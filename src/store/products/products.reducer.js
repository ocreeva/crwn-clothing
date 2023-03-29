import * as productsType from "./products.type";

const initialState = {
    categories: [],
};

const productsReducer = (state = initialState, { type, payload }) =>
{
    switch (type) {
        case productsType.set:
            return payload;
        default:
            return state;
    }
}

export default productsReducer;
