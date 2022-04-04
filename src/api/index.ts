import axios, { AxiosRequestConfig } from "axios"

const API_URL = 'https://api.giphy.com/v1/gifs/'
const API_KEY = 'WRf2yIqGAKlmH3TSKmd2kEFRdg14auMt'

const REQUEST_CONFIG: AxiosRequestConfig<any> = {
    baseURL: API_URL,
    params: { api_key: API_KEY, limit: 12 },
}


export const api = axios.create(REQUEST_CONFIG)
