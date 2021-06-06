import React from 'react'
import '../css/Header.css'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div className="header">
            <div className="header-button">
                <NavLink exact activeClassName="active-header" to='/dashboard'><button>Dashboard</button></NavLink>
                <NavLink exact activeClassName="active-header" to='/transactions'><button>Transactions</button></NavLink>
                <NavLink exact activeClassName="active-header" to='/crypto-prices'><button>Crypto Prices</button></NavLink>
            </div>
            <div className="header-logout">
                {!isAuthenticated && (<Login />)}
                {isAuthenticated && <Logout />}
            </div>
        </div>
    )
}

export default Header
