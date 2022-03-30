import { api } from ".";



export async function searchGIF(query: string) {
    return await api.get('search', { params: { q: query } })
}