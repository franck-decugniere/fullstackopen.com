import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/'

//?latitude=48.8534&longitude=2.3488&current=temperature_2m&forecast_days=1/
const ENDPOINT_FORECAST = 'v1/forecast?current=temperature_2m'

const getCurrentTemperature = async (latitude, longitude) => {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT_FORECAST}&latitude=${latitude}&longitude=${longitude}`)
    // console.log("Response", response)
    return response.data;
};

export default {
    getCurrentTemperature: getCurrentTemperature
};
