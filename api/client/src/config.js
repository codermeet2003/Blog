import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://blog-web-g2.herokuapp.com/api/"
});