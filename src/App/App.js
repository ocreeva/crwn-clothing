import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { PaymentProvider } from "../services/payments";
import DefaultRoutes from "../routes";

import { useDispatch } from "react-redux";
import { readCategoriesDataAsync } from "../features/categories";
import { readProductsDataAsync } from "../features/products";

import { useSelector } from "react-redux";
import { selectRegistrationProperties } from "../features/user";

import { authStateChangedEffect } from "../features/user";

const App = () => {
    const userRegistrationProperties = useSelector(selectRegistrationProperties);

    const dispatch = useDispatch();
    useEffect(() => authStateChangedEffect(dispatch, userRegistrationProperties), [ dispatch, userRegistrationProperties ]);
    useEffect(() => { dispatch(readCategoriesDataAsync()); }, [ dispatch ]);
    useEffect(() => { dispatch(readProductsDataAsync()); }, [ dispatch ]);

    return (
        <BrowserRouter>
            <PaymentProvider>
                <DefaultRoutes />
            </PaymentProvider>
        </BrowserRouter>
    );
};

export default App;
