import React from 'react';

import './App.css';
import Header from "./Header";
import CryptoPrices from './CryptoPrices';
import { Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import Transictions from './Transictions';


function App() {

  return (
    <div className="app">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/transictions' component={Transictions}></Route>
        <Route path='/crypto-prices' component={CryptoPrices} />
      </Switch>
      {/* <CryptoPrices></CryptoPrices>
      <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
