import { Route, Routes } from 'react-router-dom';

import ShopCategory from './ShopCategory.component';
import ShopIndex from './ShopIndex.component';

import './Shop.styles.scss';

const Shop = () => {
    return (
        <Routes>
          <Route index element={<ShopIndex />} />
          <Route path=':category' element={<ShopCategory />} />
        </Routes>
    );
}

export default Shop;
