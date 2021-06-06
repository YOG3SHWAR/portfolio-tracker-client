import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/CryptoPrices.css'
import '../css/Coin.css'
import '../css/Header.css'
import Coin from './Coin'
import { Link } from 'react-router-dom'

const CryptoPrices = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
<<<<<<< HEAD
    const getApi = async () =>
      {
        try
          {
            let res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            setCoins(res.data);
            console.log(coins);
          }
          catch(err)
          {
            console.log("There has been an error!");
          }
      };
    useEffect(
      () =>{ getApi(); }
      ,
      []
  );
=======
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);

            })
            .catch(err => console.log("Error! Try again later."));
        setLoading(false);
    }, []);
>>>>>>> 1831e43e7cb97621726783e097af9464eab69e0c

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const setCoinId = (coinId) =>
        localStorage.setItem("coinId", coinId);

    if (isLoading) return (<div className="loading"></div>)

    return (
        <div className='crypto-prices'>
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
                </form>
            </div>

<<<<<<< HEAD
            {filteredCoins.map
              (
                coin =>
                {
                  return (
                      <Coin
                          key={coin.id}
                          name={coin.name}
                          image={coin.image}
                          symbol={coin.symbol}
                          maketcap={coin.market_cap}
                          price={coin.current_price}
                          priceChange={coin.price_change_percentage_24h}
                          volume={coin.total_volume}
                      />

                  )
              }
          )
        }
=======
            {filteredCoins.map(coin => {
                return (
                    <Link className="coin-link" to={`/coin-chart/${coin.id}`}>
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            maketcap={coin.market_cap}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume}
                        />
                    </Link>
                )
            })}
>>>>>>> 1831e43e7cb97621726783e097af9464eab69e0c
        </div>
    )
}

export default CryptoPrices
