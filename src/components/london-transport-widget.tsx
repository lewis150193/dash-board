import React, {useEffect, useState} from 'react';
import {getTrainStatus} from "../utils/axiosCalls";

const TFLWidget = () => {
    const [lines, setLines] = useState([]);
    // TODO Filter train name and status codes
    useEffect(() => {
    getTrainStatus();

    });

    return (
        <div>ffkfk</div>
    )

}

export {
    TFLWidget
}
