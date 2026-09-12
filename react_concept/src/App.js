import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Loginpage from './Pages/loginpage';
import Users from './Pages/users';
import Product from'./Pages/product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Loginpage />} />
        <Route path='/users' element={<Users />} />
         <Route path='/product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
