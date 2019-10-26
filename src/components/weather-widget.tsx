import React, {useEffect, useState} from 'react';
import {getImages} from "../utils/axiosCalls";
import {ICharaterObject} from "../datatypes";

// interface WeatherWidget {
//     name: string
// }

export const WeatherWidget = () => {
    const [date, setDate] = useState([]);

    useEffect(() => {
        // @ts-ignore
        getImages().then(char => setDate(char));
    },[]);

    return (
      <div>{date.map( (item: ICharaterObject) => {
          return (
              <div>{item.name}</div>
          )
      })}</div>
    )
}
