import { MediaAction, MediaActionTypes, MediaState } from "../types/media"


const InitialState: MediaState = {
    media: [],
    isLoading: false,
    error: null
}

export const mediaReducer = (state: MediaState = InitialState, action: MediaAction): MediaState => {
    switch (action.type) {
        case MediaActionTypes.FETCH:
            const newArray = [...state.media]
            newArray.push(...action.payload)
            return { isLoading: false, error: null, media: newArray }
        case MediaActionTypes.ERROR:
            return { isLoading: false, error: action.payload, media: state.media }
        default: return state
    }
}