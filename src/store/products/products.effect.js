import { getCategoriesData } from "../../utility/firebase/firebase.utility";

import store from "../store";
import * as productsAction from "./products.action";

export const loadProductsDataEffect = () => {
    getCategoriesData().then(productsByCategory => {
        const productById = Object.values(productsByCategory).reduce((value, category) => {
            category.items.forEach(item => value[item.id] = item);
            return value;
        }, {});
        store.dispatch(productsAction.set({ productsByCategory, productById }));
    });
};
