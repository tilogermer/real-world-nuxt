import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/tilogermer/real-world-nuxt`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCourses() {
    return apiClient.get('/courses')
  },
  getCourse(id) {
    return apiClient.get('/courses/' + id)
  }
}
