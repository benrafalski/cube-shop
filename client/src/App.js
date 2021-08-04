import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider'
import Register from './components/Register';
import Products from './components/Products';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    if(currentUser.email){
      dispatch({
        type: 'SET_USER',
        user: currentUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
    console.log(currentUser)
  }, [currentUser])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/products/cuboid'>
            <Navbar/>
            <Products page={'cuboid'}/>
            <Footer/>
          </Route>
          <Route path='/products/large'>
            <Navbar/>
            <Products page={'large-puzzles'}/>
            <Footer/>
          </Route>
          <Route path='/products/wca'>
            <Navbar/>
            <Products page={'wca-puzzles'}/>
            <Footer/>
          </Route>
          <Route path='/products/speedcubes'>
            <Navbar/>
            <Products page={'speedcubes'}/>
            <Footer/>
          </Route>
          <Route path='/products'>
            <Navbar/>
            <Products page={'categories'}/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Navbar setCurrentUser={setCurrentUser}/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
