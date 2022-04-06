
export interface MediaState {
    media: Array<any>,
    error: string | null
}

export enum MediaActionTypes{
    FETCH = 'FETCH',
    ERROR = 'ERROR',
    CLEAR = 'CLEAR'
}


export interface FetchMediaAction{
    type: MediaActionTypes.FETCH
    payload: any[]
}

export interface ClearMediaAction{
    type: MediaActionTypes.CLEAR
    payload: []
}

export interface ErrorMediaAction{
    type: MediaActionTypes.ERROR
    payload: string
}


export type MediaAction = FetchMediaAction | ErrorMediaAction | ClearMediaAction
