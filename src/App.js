import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './auth/Login';
import SVG from './SVG';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/home' element={<SVG />} />
      </Routes>
    </Router>
  );
}

export default App;
