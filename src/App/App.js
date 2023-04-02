import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DefaultRoutes from "../routes";

import { useDispatch } from "react-redux";
import { productsAction } from "../store/actions";

import { authStateChangedEffect } from "../store/effects";

const App = () => {
    useEffect(authStateChangedEffect, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsAction.readDataAsync());
    }, [ dispatch ]);

    return (
        <BrowserRouter>
            <DefaultRoutes />
        </BrowserRouter>
    );
};

export default App;
