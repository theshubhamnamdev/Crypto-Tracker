import axios from "axios";
const api_url = "https://api.coingecko.com/api/v3"

export const data = async () => {
    const response = await axios.get(`${api_url}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
    return response.data
}
export const trenddata = async () => {
    const response = await axios.get(`${api_url}/search/trending`)
    return response.data.coins
}

export const search = async (text) => {
    const response = await axios.get(`${api_url}/search?query=${text}`)
    return response.data.coins
}


export const chartCoins = async (id) => {
    const response = await axios.get(`${api_url}/coins/${id}/market_chart?vs_currency=inr&days=1`)
    return response.data.prices
}
export const coinDetail = async (id) => {
    const response = await axios.get(`${api_url}/coins/${id}`)
    return response.data
}