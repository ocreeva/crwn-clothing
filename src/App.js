import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "./routes";

import { authStateChangedEffect, loadProductsDataEffect } from "./store/effects";

const App = () => {
    useEffect(authStateChangedEffect, []);
    useEffect(loadProductsDataEffect, []);

    return (
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    );
};

export default App;
