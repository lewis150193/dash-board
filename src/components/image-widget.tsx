import React, { ReactNode, useEffect, useState } from "react";
import { getImages } from "../utils/axiosCalls";

export const ImageWidget = () => {
  const [date, setDate] = useState([]);
  const [isNext, setIsNext] = useState(false);

  const randomImage = (): ReactNode => {
    const randomNumber = Math.floor(Math.random() * 20);
    const randomImage = date[randomNumber];
    return <img className="picture" src={randomImage} alt="Character" />;
  };

  useEffect(() => {
    getImages().then((char: any) => setDate(char));
  }, [isNext]);

  return (
    <div className="image-widget">
      {randomImage()}
      <button className="next-image" onClick={() => setIsNext(!isNext)}>
        Next image
      </button>
    </div>
  );
};
