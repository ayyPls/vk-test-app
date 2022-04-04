
export interface MediaState {
    media: Array<any>,
    isLoading: boolean,
    error: string | null
}
// interface MessageAction{
//     type: string,
//     payload?: any
// }


export enum MediaActionTypes{
    FETCH = 'FETCH',
    ERROR = 'ERROR'
}


export interface FetchMediaAction{
    type: MediaActionTypes.FETCH
    payload: any[]
}

export interface ErrorMediaAction{
    type: MediaActionTypes.ERROR
    payload: string
}


export type MediaAction = FetchMediaAction | ErrorMediaAction

