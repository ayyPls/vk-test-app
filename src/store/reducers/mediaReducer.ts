import { MediaAction, MediaActionTypes, MediaState } from "../types/media"


const InitialState: MediaState = {
    media: [],
    error: null
}

export const mediaReducer = (state: MediaState = InitialState, action: MediaAction): MediaState => {
    switch (action.type) {
        case MediaActionTypes.FETCH:
            return {  error: null, media: state.media.concat(action.payload) }
        case MediaActionTypes.CLEAR:
            return {  error: null, media: action.payload }
        case MediaActionTypes.ERROR:
            return {  error: action.payload, media: [] }
        default: return state
    }
}