import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'


const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}
const create = async (newPerson) => {
    const response = await axios.post(baseURL, newPerson)
    return response.data
}

const deletePerson = async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`)
    return response.data
}

const updatePerson = async (updatedPerson) => {
    console.log("updatePerson", updatedPerson)
    const response = await axios
        .put(`${baseURL}/${updatedPerson.id}`, updatedPerson)
    return response.data
}

export default { getAll, create, deletePerson, updatePerson};