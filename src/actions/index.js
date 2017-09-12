import axios from 'axios'
const API_KEY = 'b61721d113c245cf709c16636ba5dada'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);
  console.log("Request", request);

  //request will return promises and this is passed in paylload
  //so from action creator these promises take time to load so it dun create mess
  //middleware are used that hold ons action creator till promises are resolved
  //after that are passed on to reducers.
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
