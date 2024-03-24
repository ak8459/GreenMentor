
import './input.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Todos from './Pages/Todos';
import Navbar from './components/Navbar';
import PrivatePage from './Pages/PrivatePage'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<PrivatePage>
          <Todos />
        </PrivatePage>} />
      </Routes>
    </div>
  );
}

export default App;
