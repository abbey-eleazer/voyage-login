import axios from "axios"

const axiosClient = axios.create({
  baseURL: 'https:/freetestapi.com/api/v1/movies'
})

export default axiosClient