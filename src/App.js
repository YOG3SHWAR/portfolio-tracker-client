import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./Header";

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then(res => {
        setCoins(res.data);
        console.log(coins);
      })
      .catch(err => alert("Error! Try again later."))
  }, []);

  return (
    <div className="tracker-app">
      <Header></Header>
    </div>
  );
}

export default App;
