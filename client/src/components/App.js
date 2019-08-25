import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './Landing'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Landing}/>
      </Router>
    </Provider>
  )
}