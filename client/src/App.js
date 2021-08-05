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
import Categories from './components/Categories';
import ViewItem from './components/ViewItem';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [item, setItem] = useState({})
  const [category, setCategory] = useState('')
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

  useEffect(() =>{
    console.log(category)
  }, [category])

  useEffect(() =>{
    console.log(item)
  }, [item])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path={`/products/item`}>
            <Navbar 
              setCurrentUser={setCurrentUser} 
              setCategory={setCategory}/>
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
          <Route path={`/products/${category}`}>
            <Navbar 
              setCurrentUser={setCurrentUser} 
              setCategory={setCategory}/>
            {category 
              ? <Products 
                  page={category} 
                  setCategory={setCategory} 
                  setItem={setItem}
                />
              : <Categories setCategory={setCategory}/>
            }   
            <Footer/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Navbar 
              setCurrentUser={setCurrentUser} 
              setCategory={setCategory}
            />
            <Home setCategory={setCategory}/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
