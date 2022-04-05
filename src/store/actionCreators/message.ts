import { Dispatch } from "redux"
import { MediaAction, MediaActionTypes } from "../types/media"
import { MessageAction, MessageActionTypes } from "../types/message"

export const sendMessage = (id: string, url: string) => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({ type: MessageActionTypes.ADD, payload: { id: id, mediaURL: url } })
        }
        catch (e) {
            dispatch({ type: MessageActionTypes.ERROR, payload: 'Произошла ошибка при загрузке сообщений' })
        }
    }
}