import { ProductsProvider } from './ProductsContext';
import { UserProvider } from './UserContext';

const ContextProvider = ({ children }) => {
    return (
        <UserProvider>
            <ProductsProvider>
                { children }
            </ProductsProvider>
        </UserProvider>
    );
};

export default ContextProvider;