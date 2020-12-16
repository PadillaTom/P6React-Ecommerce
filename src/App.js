import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:
import { Navbar, Sidebar, Footer } from './components';
// Pages: --> IndexJS will work as Main file, no need to Select its own path
import {
  Home,
  About,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  Cart,
  Checkout,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/products'>
          <Products></Products>
        </Route>
        <Route
          path='/products/:id'
          children={<SingleProduct></SingleProduct>}
        ></Route>
        <Route path='/cart'>
          <Cart></Cart>
        </Route>
        <Route path='/checkout'>
          <Checkout></Checkout>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
