import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CryptoPrices.css'
import Coin from './Coin';

const CryptoPrices = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                console.log(coins);
            })
            .catch(err => console.log("Error! Try again later."))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='crypto-prices'>
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        volume={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                    />

                )
            })}
        </div>
    )
}

export default CryptoPrices
