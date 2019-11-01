import React, {useEffect, useState} from 'react';
import {getTrainStatus} from "../utils/axiosCalls";

export interface ITrainStatus {
    name: string,
    service: string
}

const TFLWidget = () => {
    const [trainLines, setLines] = useState([]);

    // TODO Filter train name and status codes
    useEffect(() => {
    getTrainStatus().then( (trainStatus: any) => setLines(trainStatus));
    },[]);

    // console.log(trainLines)
    return (
        <div>
            {trainLines.map((item: ITrainStatus) => {
                return (
                    <div  key={item.name} className="TFLItem">
                        <h3>{item.name}</h3>
                        <p>{item.service}</p>
                    </div>
                )
            })}
        </div>
    )

};

export {
    TFLWidget
}
