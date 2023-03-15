import { createContext, useState } from "react";

import PRODUCTS from '../data/products.json';

export const ProductsContext = createContext({
    products: {},
    getProductById: (id) => null,
});

export const ProductsProvider = ({ children }) => {
    const [ products ] = useState(PRODUCTS);

    const productsTable = Object.fromEntries(products.map(product => [ product.id, product ]));
    const getProductById = (id) => productsTable[id];

    const value = { products, getProductById };
    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>;
};

export default ProductsContext;
