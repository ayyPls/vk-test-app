import { MediaAction, MediaActionTypes, MediaState } from "../types/media"


const InitialState: MediaState = {
    media: [],
    isLoading: false,
    error: null
}


export const mediaReducer = (state: MediaState = InitialState, action: MediaAction): MediaState => {
    switch (action.type) {
        case MediaActionTypes.FETCH:
            return { isLoading: false, error: null, media: action.payload }
        case MediaActionTypes.ERROR:
            return { isLoading: false, error: 'Произошла ошибка при загрузке медиа', media: [] }
        default: return state
    }
}