import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Landing'
import Listings from './Listings'
import Post from './Post'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route path="/search/:zip" component={Listings}/>
        <Route path="/post/:id" component={Post}/>
      </Router>
    </Provider>
  )
}