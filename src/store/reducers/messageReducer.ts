import { MessageAction, MessageActionTypes, MessageState } from "../types/message"


const InitialState: MessageState = {
    messages: []
}

export const messageReducer = (state: MessageState = InitialState, action: MessageAction): MessageState => {
    switch (action.type) {
        case MessageActionTypes.ADD:
            const array = state.messages
            array.push(action.payload)
            return { messages: array }
        default: return state
    }
}