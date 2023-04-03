import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "../routes";

import { useDispatch } from "react-redux";
import { readCategoriesDataAsync } from "../features/categories";
import { readProductsDataAsync } from "../features/products";

import { useSelector } from "react-redux";
import { selectUserRegistrationProperties } from "../features/registration";

import { authStateChangedEffect } from "../features/user";

const App = () => {
    const userRegistrationProperties = useSelector(selectUserRegistrationProperties);

    const dispatch = useDispatch();
    useEffect(() => authStateChangedEffect(dispatch, userRegistrationProperties), [ dispatch, userRegistrationProperties ]);
    useEffect(() => { dispatch(readCategoriesDataAsync()); }, [ dispatch ]);
    useEffect(() => { dispatch(readProductsDataAsync()); }, [ dispatch ]);

    return (
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    );
};

export default App;
