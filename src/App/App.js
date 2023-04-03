import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "../routes";

import { useDispatch } from "react-redux";
import { readCategoriesDataAsync } from "../features/categories";
import { readProductsDataAsync } from "../features/products";

import { authStateChangedEffect } from "../store/effects";

const App = () => {
    useEffect(authStateChangedEffect, []);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(readCategoriesDataAsync()); }, [ dispatch ]);
    useEffect(() => { dispatch(readProductsDataAsync()); }, [ dispatch ]);

    return (
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    );
};

export default App;
