import { BrowserRouter, Route } from 'react-router-dom';
import Register from "./Pages/Register"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      
        <Route path='/' element={<Register />}/>
    </BrowserRouter>
  );
}

export default App;
