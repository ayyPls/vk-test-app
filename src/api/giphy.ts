import { api } from ".";


export const searchGIF = async (query: string, offset: number) => {
    return await api.get('search', { params: { q: query } })
}