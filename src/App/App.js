import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "../routes";

import { useDispatch } from "react-redux";
import { readCategoriesDataAsync } from "../features/categories";
import { readProductsDataAsync } from "../features/products";

import { authStateChangedEffect } from "../features/user";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => authStateChangedEffect(dispatch, {}), [ dispatch ]);
    useEffect(() => { dispatch(readCategoriesDataAsync()); }, [ dispatch ]);
    useEffect(() => { dispatch(readProductsDataAsync()); }, [ dispatch ]);

    return (
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    );
};

export default App;
