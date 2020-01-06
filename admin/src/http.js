import axios from 'axios';

const http = axios.create({
    baseUrl: 'http://localhost:3000/admin/api'
})

export default http;