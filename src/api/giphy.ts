import { api } from ".";


export const searchGIF = async (query: string) => {
    return await api.get('search', { params: { q: query } })
}