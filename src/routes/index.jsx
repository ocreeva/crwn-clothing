import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../layouts";

import CheckoutPage from "../pages/Checkout";
import DirectoryPage from "../pages/Directory";
import SignInPage from "../pages/SignIn";

import ShopRoute from "./Shop";

const DefaultRoutes = () => (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route index element={<DirectoryPage />} />
            <Route path='checkout' element={<CheckoutPage />} />
            <Route path='sign-in' element={<SignInPage />} />

            <Route path='shop/*' element={<ShopRoute />} />
        </Route>
    </Routes>
);

export default DefaultRoutes;
