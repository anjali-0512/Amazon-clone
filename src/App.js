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
import { db } from './firebase';

import styled from 'styled-components';

function App() {
    
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


  return (
    <Router>
      <Container>
      <Header cartItems={cartItems} />
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
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;

`

