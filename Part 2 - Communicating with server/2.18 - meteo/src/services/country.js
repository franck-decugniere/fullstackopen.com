import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/'
const ENDPOINT_ALL = 'api/all'

const getAllCountries = async () => {
    const response = await axios.get(`${BASE_URL}/${ENDPOINT_ALL}`)
    return response.data;
};

export default {
    getAllCountries: getAllCountries
};
