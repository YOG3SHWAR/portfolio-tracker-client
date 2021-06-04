import React from 'react';

import './App.css';
import Header from "./Header";
import CryptoPrices from './CryptoPrices';


function App() {

  return (
    <div className="app">
      <Header></Header>
      <CryptoPrices></CryptoPrices>
    </div>
  );
}

export default App;
