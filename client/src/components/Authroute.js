import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { checkLogin } from '../actions/login.actions'

export default props => {
const loginValid = useSelector(appState => appState.authRedirect)

return loginValid ? <Route {...props}/> : <Redirect to="/login"/>
}