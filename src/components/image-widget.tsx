import React, {ReactNode, useEffect, useState} from 'react';
import {getImages} from "../utils/axiosCalls";


export const ImageWidget = () => {
    const [date, setDate] = useState([]);

    const randomImage = (): ReactNode => {
        const randomNumber = Math.floor(Math.random() * 20);
        const randomImage = date[randomNumber];
            return (
                <img src={randomImage} alt="Character"/>
                    )
    };

    useEffect(() => {
        getImages().then((char: any) => setDate(char));

    },[]);

    return (
      <div>
          {randomImage()}
      </div>
    )
};
