import './App.css';
import Home from './pages/Home';
import Login from './componets/Login';
import Registration from './componets/Registration';
import Error from './componets/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
