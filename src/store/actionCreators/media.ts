import { Dispatch } from "redux"
import { MediaAction, MediaActionTypes } from "../types/media"
import { searchGIF } from "../../api/giphy"

export const fetchGIF = (query: string, offset: number = 0, signal: AbortSignal) => {
    return async (dispatch: Dispatch<MediaAction>) => {
        try {
            const response = await searchGIF(query, offset, signal)
            response.data.data.length > 0 ?
                dispatch({ type: MediaActionTypes.FETCH, payload: response.data.data })
                : dispatch({ type: MediaActionTypes.ERROR, payload: 'Медиафайлы не найдены' })
        }
        catch (e) {
            dispatch({ type: MediaActionTypes.ERROR, payload: 'Произошла ошибка при загрузке медиафайлов' })
        }
    }
}