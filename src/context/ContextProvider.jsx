import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';

const ContextProvider = ({ children }) => {
    return (
            <ProductsProvider>
                <CartProvider>
                    { children }
                </CartProvider>
            </ProductsProvider>
    );
};

export default ContextProvider;