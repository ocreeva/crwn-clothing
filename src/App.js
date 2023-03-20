import { Route, Routes } from 'react-router-dom';

import Checkout from './routes/Checkout/Checkout.component';
import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Shop from './routes/Shop/Shop.component';
import SignIn from './routes/SignIn/SignIn.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
