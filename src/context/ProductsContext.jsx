import { createContext, useEffect, useState } from "react";

import { getCategoriesData } from "../utility/firebase/firebase.utility";

export const ProductsContext = createContext({
    productsByCategory: {},
    productById: {},
});

export const ProductsProvider = ({ children }) => {
    const [ productsByCategory, setProductsByCategory ] = useState({});
    const [ productById, setProductById ] = useState({});

    useEffect(
        () => { getCategoriesData().then(setProductsByCategory) },
        []);

    useEffect(
        () => setProductById(Object.values(productsByCategory).reduce((acc, category) => {
            category.items.forEach(item => acc[item.id] = item);
            return acc;
        } , {})),
        [productsByCategory]);

    const value = { productsByCategory, productById };
    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>;
};

export default ProductsContext;
