import * as productsType from "./products.type";

const initialState = {
    categories: [],
    error: null,
    isLoading: false,
};

const productsReducer = (state = initialState, { type, payload, error }) =>
{
    switch (type) {
        case productsType.readData:
            return { ...state, error: null, isLoading: true };

        case productsType.readSucceeded:
            return { ...state, categories: payload, isLoading: false };

        case productsType.readFailed:
            return { ...state, error: error, isLoading: false };

        default:
            return state;
    }
}

export default productsReducer;
