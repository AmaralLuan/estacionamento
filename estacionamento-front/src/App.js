import './App.css';
import {Router, Route} from 'react-router-dom'


/* PAGES */
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { AuthProvider } from './AuthContext';
import history from './history';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </AuthProvider>  
  );
}

export default App;
