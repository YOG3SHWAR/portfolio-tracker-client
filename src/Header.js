import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header-button">
                <Link to='/dashboard'><button>Dashboard</button></Link>
                <Link to='/transictions'><button>Transictions</button></Link>
                <Link to='/crypto-prices'><button>Crypto Prices</button></Link>
            </div>
            <div className="header-logout">
                <Link><button>Log Out</button></Link>
            </div>
        </div>
    )
}

export default Header
