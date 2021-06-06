import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../css/CoinChart.css'
import axios from "axios";
import Charts from './Charts';

const CoinChart = () => {
    const id = useParams();
    const [coinData, setCoinData] = useState({});

    const getDay = async () => {
        try {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=inr&days=1`)
            setCoinData(prevState => ({
                coinData: {
                    ...prevState.coinData,
                    day: res.data.prices
                }
            }))
        }
        catch (err) {
            console.log(err);
        }
    };

    const getWeek = async () => {
        try {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=inr&days=7`)
            setCoinData(prevState => ({
                coinData: {
                    ...prevState.coinData,
                    week: res.data.prices
                }
            }))
        }
        catch (err) {
            console.log("Error! Try again later.");
        }
    };

    const getMonth = async () => {
        try {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=inr&days=30`)
            setCoinData(prevState => ({
                coinData: {
                    ...prevState.coinData,
                    month: res.data.prices
                }
            }))
        }
        catch (err) {
            console.log("Error! Try again later.");
        }
    };

    const getYear = async () => {
        try {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=inr&days=365`)
            setCoinData(prevState => ({
                coinData: {
                    ...prevState.coinData,
                    year: res.data.prices
                }
            }))
        }
        catch (err) {
            console.log("Error! Try again later.");
        }
    };

    useEffect(() => {
        getDay();
        getWeek();
        getMonth();
        getYear();
    }, [])

    console.log("coinjdata", coinData);
    return (
        <div>
            <Charts></Charts>
        </div>
    )
}

export default CoinChart
