import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';
import { UserProvider } from './UserContext';

const ContextProvider = ({ children }) => {
    return (
        <UserProvider>
            <ProductsProvider>
                <CartProvider>
                    { children }
                </CartProvider>
            </ProductsProvider>
        </UserProvider>
    );
};

export default ContextProvider;