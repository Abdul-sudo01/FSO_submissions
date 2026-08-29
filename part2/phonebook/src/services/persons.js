import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
 return  axios.get(baseUrl).then(res => res.data)
}
const create = (personObject) => {
 return  axios.post(baseUrl , personObject).then(res => res.data)
} 
const deletePerson = (id) => {
 return  axios.delete(`${baseUrl}/${id}`)
}
export default  {getAll , create , deletePerson }