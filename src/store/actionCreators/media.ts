import { Dispatch } from "redux"
import { MediaAction, MediaActionTypes } from "../types/media"
import { searchGIF } from "../../api/giphy"

export const fetchGIF = (query: string) => {
    return async (dispatch: Dispatch<MediaAction>) => {
        try {
            dispatch({ type: MediaActionTypes.FETCH, payload: [] })
            const response = await searchGIF(query)
            dispatch({ type: MediaActionTypes.FETCH, payload: response.data.data })
        }
        catch (e) {
            dispatch({ type: MediaActionTypes.ERROR, payload: 'Произошла ошибка при загрузке медиафайлов' })
        }
    }
}