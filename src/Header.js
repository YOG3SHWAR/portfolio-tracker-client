import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-button">
                <button>Dashboard</button>
                <button>Transictions</button>
                <button>Crypto Prices</button>
            </div>
            <div className="header-logout">
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Header
