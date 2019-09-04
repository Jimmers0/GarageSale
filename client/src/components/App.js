import React, { useState, useEffect } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Landing from './Landing'
import Listings from './Listings'
import Post from './Post'
import Add from './Add'
import Inventory from './Inventory'
import Garagesale from './Garagesale'
import Myprofile from './Myprofile'
import Login from './Login'
import Watchlist from './Watchlist'
import Savedgaragesales from './Savedgaragesales'
import Register from './Register'
import Burgermenu from './menu'


export default props => {

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
                  <Burgermenu />
                  <Route exact path="/" component={Landing}/>
                  <Route path="/search/:zip" component={Listings}/>
                  <Route path="/post/:id" component={Post}/>
                  <Route path="/add" component={Add}/>
                  <Route path="/myinventory" component={Inventory}/>
                  <Route path="/mygaragesale" component={Garagesale}/>
                  <Route path="/myprofile" component={Myprofile}/>
                  <Route path="/savedgaragesale/:id" component={Savedgaragesales}/>
                  <Route path="/watchlist" component={Watchlist}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
            </div>
      </Router>
    </Provider>
  )
}