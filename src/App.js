import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import DefaultRoutes from "./routes";

import { authStateChangedEffect } from "./utility/auth.utility";

const App = () => {
    useEffect(authStateChangedEffect);

    return (
        <BrowserRouter>
            <ContextProvider>
                <DefaultRoutes />
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
