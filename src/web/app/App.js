import React, { Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import Home from './components/main'
import history from '../store/history'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Product from './components/Product'
// import { I18nextProvider } from 'react-i18next'

const Loader = () => <div>loading...</div>
const App = () => (
  <Suspense fallback={<Loader/>}>
    <Router history={history}>
        <Switch>
          <Route exact path = "/" component = {Home} />
          {/* <Route path = "/product" component = {ProductList} /> */}
          <Route path = "/product/:id" component = {Product} />
          <Route path = "/login" component={Login} />
          <Route path = "/register" component = {Register} />
          <Route path = "/cart" component = {Cart} />
          {/* <Route path = "/seller/product" component = {SellerProduct} /> */}
        </Switch>
    </Router>
  </Suspense>
)

export default App
