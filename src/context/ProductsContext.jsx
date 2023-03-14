import { createContext, useState } from "react";

import PRODUCTS from '../data/products.json';

export const ProductsContext = createContext({
    products: {},
    setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
    const [ products ] = useState(PRODUCTS);
    return <ProductsContext.Provider value={{ products }}>{ children }</ProductsContext.Provider>;
};

export default ProductsContext;
