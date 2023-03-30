import { createAction } from "../store.utility";
import * as productsType from "./products.type";

export const readData = () => createAction(productsType.readData);
