import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use(response => {
  return response.data
}, error => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      console.error('Resource not found')
    } else if (error.response?.status === 500) {
      console.error('Internal server error.')
    } else {
      console.error(`Error: ${error.response?.status}: ${error.message}`)
    }
  } else {
    console.error(`Unexpected error: ${error}`)
  }

  return Promise.reject(error)
})

export default apiClient