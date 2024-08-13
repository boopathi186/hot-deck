import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/forms/Login';
import PrivateRoute, { PrivateRoutes } from './components/private-Routers/PrivateRoutes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import Decks from './pages/Decks';
import Challenges from './pages/Challenges';
import Customers from './pages/Customers';
import Theme from './pages/Themes';
import Admin from './pages/Admin';
import Roles from './pages/Roles';

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
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/dashboard/themes' element={<Theme />} />
            <Route path='/theme' element={<Theme />} />
            <Route path='/decks' element= {<Decks/>} />
            <Route path='/dashboard/decks' element= {<Decks/>} />
            <Route path='/usermanagement' element= {<Admin/>} />
            <Route path='/roles' element= {<Roles/>} />
            <Route path='/challenges' element= {<Challenges/>} />
            <Route path='dashboard/challenges' element= {<Challenges/>} />
            <Route path='/customers' element= {<Customers/>} />
            <Route path='/dashboard/customers' element= {<Customers/>} />
          </Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
