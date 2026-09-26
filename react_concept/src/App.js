import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Loginpage from './Pages/loginpage';
import Users from './Pages/users';
import Product from'./Pages/product';
import Resturant from './Pages/resturant';
import Students from './Pages/Students';
import Form from './Pages/form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Loginpage />} />
        <Route path='/users' element={<Users />} />
         <Route path='/product' element={<Product />} />
         <Route path='/Resturant' element={<Resturant/>} />
         <Route path='/students' element={<Students />} />
         <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


