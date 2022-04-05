
export interface MediaState {
    media: Array<any>,
    isLoading: boolean,
    error: string | null
}

export enum MediaActionTypes{
    FETCH = 'FETCH',
    UPDATE = 'UPDATE',
    ERROR = 'ERROR'
}


export interface FetchMediaAction{
    type: MediaActionTypes.FETCH
    payload: any[]
}

export interface UpdateMediaAction{
    type: MediaActionTypes.UPDATE
    payload: string
}


export type MediaAction = FetchMediaAction | UpdateMediaAction

