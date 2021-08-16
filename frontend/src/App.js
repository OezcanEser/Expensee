import './Style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Charts from './components/Charts';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Turnovers from './components/Turnovers';

const App = () => {
    return (
        <Router>
            <div>
                <a href='/user/auth/google'> Login Test</a>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/header" component={Header} />
                    <Route path="/charts" component={Charts} />
                    <Route path="/turnovers" component={Turnovers} />
                    <Route path="/footer" component={Footer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;