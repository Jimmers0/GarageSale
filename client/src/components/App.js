import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Landing'
import Listings from './Listings'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing}/>
      </Router>
    </Provider>
  )
}