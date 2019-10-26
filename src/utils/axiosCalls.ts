import axios from 'axios'

const weather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8c6f058a2a4a8a16691a1d17da2a7dab';
const images = 'https://rickandmortyapi.com/api/character/\n';
export const getWether = (): Promise<object> => {
    return axios.get(weather)
         .then( weather => weather.data)
};

export const getImages = (): Promise<object> => {
    return axios.get(images)
        .then( char => char.data.results)
};
