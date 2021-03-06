import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider'
import Register from './components/Register';
import Products from './components/Products';
import Categories from './components/Categories';
import ViewItem from './components/ViewItem';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JIbRbCeYChu5FtFxmKzrGPN37zOOG1SxSyniY1TuMH9aDD8MaOPKfNpzhaK4JWdUxD4W3QdJVJ5nl0AeeClzYCa00vGOmvQsl')

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [item, setItem] = useState({})
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
    //console.log(currentUser)
  }, [currentUser])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Navbar setCurrentUser={setCurrentUser} />
            <Elements stripe={promise}>
              <Checkout/>
            </Elements>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Navbar setCurrentUser={setCurrentUser} />
            <Cart setItem={setItem}/>
            <Footer/>
          </Route>
          <Route path={`/products/item`}>
            <Navbar setCurrentUser={setCurrentUser} />
            <ViewItem 
              id={item?.id}
              title={item?.title}
              price={item?.price}
              rating={item?.rating}
              image={item?.image}
              category={item?.category}
              type={item?.type}
              magnets={item?.magnets}
              size={item?.size}
              weight={item?.weight}
              released={item?.released}
              description={item?.description}
            />
            <Footer/>
          </Route>
          <Route path={'/products/speedcubes'}>
            <Navbar setCurrentUser={setCurrentUser} />
            <Products 
                  page={'speedcubes'}  
                  setItem={setItem}
            />   
            <Footer/>
          </Route>
          <Route path={'/products/wca-puzzles'}>
            <Navbar setCurrentUser={setCurrentUser} />
            <Products 
                  page={'wca-puzzles'} 
                  setItem={setItem}
            />   
            <Footer/>
          </Route>
          <Route path={'/products/large-puzzles'}>
            <Navbar setCurrentUser={setCurrentUser} />
            <Products 
                  page={'large-puzzles'} 
                  setItem={setItem}
            />   
            <Footer/>
          </Route>
          <Route path={'/products/cuboid'}>
            <Navbar setCurrentUser={setCurrentUser} />
            <Products 
                  page={'cuboid'} 
                  setItem={setItem}
            />   
            <Footer/>
          </Route>
          <Route path={'/categories'}>
            <Navbar setCurrentUser={setCurrentUser} />
            <Categories/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Navbar setCurrentUser={setCurrentUser} />
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
