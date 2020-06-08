import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products'
import Single from './components/single/Single'
import Cart from './components/cart/Cart'




export default (
   <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/products/:product_id' component={Single} />
      <Route exact path='/cart' component={Cart} />
   </Switch>
)