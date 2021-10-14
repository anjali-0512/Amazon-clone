import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import { db, auth } from './firebase';
import Login from './Login';

import styled from 'styled-components';

function App() {
    
  const [ user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [ cartItems, setCartItems] = useState([]);

  const getCartItems= () =>{
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems= snapshot.docs.map((doc)=> ({
        id: doc.id,
        product: doc.data()

      }))
      setCartItems(tempItems);
    })
  }

  useEffect(()=>{
    getCartItems();
  }, [])

  //console.log(cartItems);

  //console.log("User=", user);

  const signOut = () =>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })

  }

  return (
    <Router>{
      !user ? (

        <Login setUser={setUser} />

      ):( 
        <Container>
      <Header signOut={signOut} user={user} cartItems={cartItems} />
     <div className="App">
      <Switch>

        

        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      
      
      </div>
    </Container>

      )


      }
      
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;

`

