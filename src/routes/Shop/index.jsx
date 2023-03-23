import { Route, Routes } from 'react-router-dom';

import ShopPage from "../../pages/Shop";
import ShopCategoryPage from "../../pages/Shop/Category";

const ShopRoute = () => {
    return (
        <Routes>
          <Route index element={<ShopPage />} />
          <Route path=':category' element={<ShopCategoryPage />} />
        </Routes>
    );
}

export default ShopRoute;
