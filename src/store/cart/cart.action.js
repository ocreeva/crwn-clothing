import { createAction } from "../store.utility";

import * as cartType from "./cart.type";

export const toggleDropdown = () => createAction(cartType.toggleDropdown);

export const addItem = (id) => createAction(cartType.addItem, id);
export const clearItem = (id) => createAction(cartType.clearItem, id);
export const removeItem = (id) => createAction(cartType.removeItem, id);
