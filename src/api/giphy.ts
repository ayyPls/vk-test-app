import { api } from ".";


export const searchGIF = async (query: string, offset: number, signal: AbortSignal) => {
    return await api.get('search', { params: { q: query, offset: offset }, signal: signal })
}