import axios from "axios";

export const apiClient = axios.create({
    baseURL: "//680e0848c47cb8074d91df08.mockapi.io/api/getAssortment/price"
})