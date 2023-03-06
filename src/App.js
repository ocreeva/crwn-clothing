import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './routes/Navigation/Navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
