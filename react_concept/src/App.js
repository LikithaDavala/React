import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Loginpage from './Pages/loginpage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
