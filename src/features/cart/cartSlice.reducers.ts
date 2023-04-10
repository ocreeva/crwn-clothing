import type { PayloadAction } from "@reduxjs/toolkit";
import type { ICartState } from "./cartSlice.types";

interface IProductPayload {
    productId: string;
}

export const addItemToCart: (state: ICartState, action: PayloadAction<IProductPayload>) => void =
    (state, { payload: { productId } }) => {
        if (productId in state.items) {
            state.items[productId].quantity += 1;
        } else {
            state.items[productId] = { productId, quantity: 1 };
        }
    };

export const clearItemFromCart: (state: ICartState, action: PayloadAction<IProductPayload>) => void =
    (state, { payload: { productId } }) => {
        if (!(productId in state.items)) return;
        delete state.items[productId];
    };

export const removeItemFromCart: (state: ICartState, action: PayloadAction<IProductPayload>) => void =
    (state, { payload: { productId } }) => {
        if (!(productId in state.items)) return;
        state.items[productId].quantity -= 1;
        if (state.items[productId].quantity <= 0) {
            delete state.items[productId];
        }
    };
