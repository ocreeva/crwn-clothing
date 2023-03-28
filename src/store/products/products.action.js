import { createAction } from "../store.utility";

import * as productsType from "./products.type";

export const set = payload => createAction(productsType.set, payload);
