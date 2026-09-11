import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Loginpage from './Pages/loginpage';
import Users from './Pages/users';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Loginpage />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
