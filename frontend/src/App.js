import './Style.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Charts from './components/Charts';
import Home from './components/Home';
import Login from './components/Login';
import Turnovers from './components/Turnovers';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/charts' component={Charts} />
          <Route path='/turnovers' component={Turnovers} />
          <Route path='*' render ={ () => <Redirect to = "/home"/>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
