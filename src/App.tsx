import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/forms/Login';
import PrivateRoute, { PrivateRoutes } from './components/private-Routers/PrivateRoutes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/DashBoard';

function App() {
  return (
    <div className='App'>
       <Router>
        <Routes>
          <>
            <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<Login />} />
            </Route>
          </>
          <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
     
          </Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
