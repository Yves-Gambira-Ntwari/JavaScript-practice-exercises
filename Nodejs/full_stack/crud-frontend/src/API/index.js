import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/clients'
})

export const fetchClientApi = () => API.get("/")
export const createClientApi = (formData) => API.post('/',formData)
export const updateRouterApi = (formData) => API.put('/',formData)
export const deleteRouterApi = (id) => API.delete(`/${id}`)