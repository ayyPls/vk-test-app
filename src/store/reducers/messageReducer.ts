import { MediaAction, MediaActionTypes, MediaState } from "../types/media"
import { MessageAction, MessageActionTypes, MessageState } from "../types/message"


const InitialState: MessageState = {
    messages: [{id: '123', mediaURL: 'https://1.bp.blogspot.com/-IeS4yTWYsJo/X0E7UzhshPI/AAAAAAAAC0g/Wkmqe7K2tDM76a0GUdpQgtmxwtenr1mZACLcBGAsYHQ/w1200-h630-p-k-no-nu/Logo%2BSRC.png'}]
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