import { readCategoriesData } from "../../services/storage";

import store from "../store";
import * as productsAction from "./products.action";

export const loadProductsDataEffect = () => {
    readCategoriesData().then(categories => {
        store.dispatch(productsAction.set({ categories }));
    });
};
