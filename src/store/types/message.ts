
type MessageWithMedia = { id: string, mediaURL: string }


export interface MessageState {
    messages: Array<MessageWithMedia>
}


export enum MessageActionTypes {
    ADD = 'ADD',
    ERROR = 'ERROR'
}


export interface AddMessageAction {
    type: MessageActionTypes.ADD
    payload: MessageWithMedia
}


export interface ErrorMessageAction {
    type: MessageActionTypes.ERROR
    payload: string
}

export type MessageAction = AddMessageAction | ErrorMessageAction

