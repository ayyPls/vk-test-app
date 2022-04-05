import { Dispatch } from "redux"
import { MediaAction, MediaActionTypes } from "../types/media"
import { searchGIF } from "../../api/giphy"

export const fetchGIF = (query: string, offset: number = 0, signal: AbortSignal) => {
    return async (dispatch: Dispatch<MediaAction>) => {
        try {
            const response = await searchGIF(query, offset, signal)
            dispatch({ type: MediaActionTypes.FETCH, payload: response.data.data })
        }
        catch (e) {
            dispatch({ type: MediaActionTypes.UPDATE, payload: 'Загрузка...' })
        }
    }
}