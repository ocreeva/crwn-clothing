import { CartProvider } from './CartContext';

const ContextProvider = ({ children }) => {
    return (
                <CartProvider>
                    { children }
                </CartProvider>
    );
};

export default ContextProvider;