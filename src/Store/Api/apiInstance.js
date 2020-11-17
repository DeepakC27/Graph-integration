import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'http://kaboom.rksv.net/api',
  headers: { 'Access-Control-Allow-Origin': '*' }
})

export default apiInstance