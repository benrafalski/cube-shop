import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>

          </Route>
          <Route path='/'>
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
