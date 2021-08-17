import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navber from './components/Navber';
import ExersizeList from './components/ExersizeList';
import EditExersize from './components/EditExersize';
import CreateUser from './components/CreateUser';
import CreateExersize from './components/CreateExersize';

function App() {
    return (
        <Router>
            <Navber />
            <br />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={ExersizeList} />
                    <Route path="/edit/:id" component={EditExersize} />
                    <Route path="/create" component={CreateExersize} />
                    <Route path="/user" component={CreateUser} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
