import React from 'react'
import '../css/Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, maketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price: <br /> ₹{price.toLocaleString()}</p>
                    <div className="coin-volume">Volume: <br /> ₹{volume.toLocaleString()}</div>
                    {priceChange < 0 ? (
                        <p className="coin-percent red"><br />{priceChange.toFixed(2)}%</p>
                    ) : (<p className="coin-percent green"><br /> {priceChange.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcao">
                        Market Cap: <br /> ₹{maketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
