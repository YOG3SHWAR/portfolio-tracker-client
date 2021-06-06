import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../css/CoinChart.css'
import axios from "axios";

const CoinChart = () => {
    const id = useParams();
    const [coinData, setCoinData] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=inr&days=7`)
            .then(res => {
                setCoinData({ ...coinData, week: res.data.prices })
            })
            .catch(err => console.log("Error! Try again later."));
    }, [])


    return (
        <div>
        </div>
    )
}

export default CoinChart
