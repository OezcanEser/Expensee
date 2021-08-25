import './Style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Login from './pages/Login';
import Turnovers from './pages/Turnovers';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Login} />
          <ProtectedRoute path='/home' component={Home} />
          <ProtectedRoute path='/charts' component={Charts} />
          <ProtectedRoute path='/turnovers' component={Turnovers} />

          <Route path='*' render={() => <Redirect to='/home' />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
