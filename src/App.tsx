import './normalize.css';
import './App.css';
import './fonts/theimmortal.ttf'
import React from 'react'
import {ImageWidget} from "./components/image-widget";
import {WeatherWidget} from "./components/weather-widget";
import {WelcomeWidget} from "./components/welcome-widget";
import {TFLWidget} from "./components/london-transport-widget";
import {TimeWidget} from "./components/time-widget";

const App: React.FC = () => (
      <div className="container">
        <div className="header">
          <h1 className="title">Interactive Dashboard</h1>
          <div className=""><TimeWidget /></div>
        </div>
        <div className="content">
          <div className="grid-row">
            <div className="grid-item"><ImageWidget /></div>
            <div className="grid-item"><WeatherWidget /></div>
            <div className="grid-item"><WelcomeWidget name="Lewis" /></div>
            <div className="grid-item"><TFLWidget /></div>
          </div>
        </div>
      </div>
);

export default App;
