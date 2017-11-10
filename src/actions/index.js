/**
 * React and Redux
 */

import axios from 'axios';

const API_KEY = '13c08b0b3a7eb5d35e5bb1397f0e492b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
