import React,{useEffect} from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../styles/menu.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {useSelector} from 'react-redux'
import { logout, checkLogin } from '../actions/login.actions'
 
export default props => {

    const login = useSelector(appState => appState.logged)
    console.log(login)
    const userDetails = useSelector(appState => appState.userDetails)

    useEffect(() => {
        
    }, [])

    let user = userDetails[0].id
    console.log(user)

    return (

      <Menu className="menu">
          
        <a id="search" className="menu-item" style={{outline: 'none' }} href="/">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="search" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Search
                </div>
            </div>
        </a>
        
        <a id="add" className="menu-item" style={{outline: 'none' }} href="/add">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="create" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Add GarageSale
                </div>
            </div>
        </a> 

        <a id="inventory" className="menu-item" style={{outline: 'none' }} href="/myinventory">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="view_comfy" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    My Inventory
                </div>
            </div>
        </a>

        <a id="mygaragesale" className="menu-item" style={{outline: 'none' }} href="/mygaragesale">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="storefront" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    My GarageSale
                </div>
            </div>
        </a>    

        <a id="savedgaragesales" className="menu-item" style={{outline: 'none' }} href={`/savedgaragesale`}>
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="gps_fixed" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Saved Sales
                </div>
            </div>
        </a>
        
        <a id="watchlist" className="menu-item" style={{outline: 'none' }} href="/watchlist">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="remove_red_eye" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Watchlist
                </div>
            </div>
        </a>
        <div>
            {!login ? <a id="logout" className="menu-item" style={{outline: 'none' }} href="/login">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="account_box" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Login
                </div>
            </div>
        </a> : <a id="logout" className="menu-item" style={{outline: 'none' }} onClick={logout} href="/">
            <div className="item"> 
                <div className="icon">
                    <MaterialIcon icon="account_box" size={20} color={colorPalette.grey._50} /> 
                </div>
                <div>
                    Log Out
                </div>
            </div>
        </a>
     }
        </div>
      </Menu>
    );
  }


