/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Container/Home/Home';
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from "./utils/firebase"
import { useStateValue } from "./Reducers/StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Components/Orders/Orders";

const promise = loadStripe( /* add your stripe publishable test keys*/);

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //run once the app components loads..
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if (authUser) {
        //if the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* Login */}
            <Login />
          </Route>
          <Route path="/checkout">
            {/* Checkout */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            {/* Payment */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            {/* Orders */}
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            {/* Home */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
