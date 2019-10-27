import React, {useEffect, useState} from 'react';
import { getWether } from "../utils/axiosCalls";


 export interface IWeather {
    name: number,
    temp: string,
    weather: Array<any>
    main: {
        temp: string
    }
}

 const WeatherWidgetComponent = ({name, weather, main, temp } : IWeather) => (
     <>
         <h1>City: {name}</h1>
         <p>{weather}</p>
         <p>{main}</p>
         <p>Temp: {temp}</p>
     </>
 );

const WeatherWidget: React.FC = () => {
    // @ts-ignore
    const [weather, setWeather] = useState<IWeather>({});

    useEffect(() => {
        getWether().then( (data) => {
            setWeather(
                {
                    id: data.weather[0].id,
                    name: data.name,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    temp: data.main.temp,
                    icon: data.weather[0].icon
                }
                );
        })
    },[]);
    return (
        <WeatherWidgetComponent
            name={weather.name}
            main={weather.main}
            temp={weather.temp}
            weather={weather.description}/>
    )
};

export {
    WeatherWidget
}
