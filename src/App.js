import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Products from './Components/pages/Products';
import Signup from './Components/pages/Signup';
import Footer from './Components/Footer';
import Protected from './Protected'
import Login from './Components/pages/Login';
import Cart from './Components/pages/Cart';
function App() {
  return (
    <>
   
   
      <Router>
        {/* <Navbar /> */}
        <Switch >
        <Route exact path="/" > <Protected Cmp={Home}/> </Route >
          {/* <Route path='/' exact component={Home}/> */}
           <Route path='/Login' component={Login} />
          <Route path='/Products' > <Protected Cmp={Products} /></ Route>
          
          <Route path='/Signup' component={Signup} />
       </Switch >
       <Footer />
      </ Router> 
    </>
  );
}

export default App;