import React from 'react';

import '../css/App.css';
import Header from "./Header";
import CryptoPrices from './CryptoPrices';
import { Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import Transictions from './Transictions';
import { useAuth0 } from "@auth0/auth0-react";
import CoinChart from './CoinChart';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="loader">
      </div>
    );

  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={CryptoPrices} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/transictions' component={Transictions}></Route>
        <Route path='/crypto-prices' component={CryptoPrices} />
        <Route path='/coin-chart/:coinId' component={CoinChart} />
      </Switch>
    </div>
  );
}

export default App;
