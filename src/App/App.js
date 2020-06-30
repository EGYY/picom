import React from 'react';

import Header from "../Header/Header";
import TableWeather from "../TableWeather/TableWeather";

import './App.css';


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <TableWeather/>
    </div>
  );
}

export default App;
