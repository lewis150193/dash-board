import './App.css';
import React from 'react'
import {WeatherWidget} from "./components/weather-widget";

const App: React.FC = () => (
      <div className="container">
          <div className="grid-row">
            <div className="grid-item"><WeatherWidget/></div>
            <div className="grid-item">Middle</div>
            <div className="grid-item">Lower</div>
            <div className="grid-item">Lower</div>
            <div className="grid-item">Lower</div>
            <div className="grid-item">Lower</div>
            <div className="grid-item">Lower</div>
          </div>
      </div>
);

export default App;
