import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import DefaultRoutes from "./routes";

import { authStateChangedEffect, loadProductsDataEffect } from "./store/effects";

const App = () => {
    useEffect(authStateChangedEffect, []);
    useEffect(loadProductsDataEffect, []);

    return (
        <BrowserRouter>
            <ContextProvider>
                <DefaultRoutes />
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
