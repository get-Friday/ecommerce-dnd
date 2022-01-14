import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {'JSON-header': 'XMLHttpRequest'}
})

export default api