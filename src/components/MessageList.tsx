import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { Message } from "./Message";

export const MessageList: FC = () => {
    const { messages } = useAppSelector(state => state.messages)
    return (
        < MessageListWrapper className='message-list' >
            {messages.map(message =>
                <Message mediaURL={message.mediaURL} key={message.id} />

            )}
        </MessageListWrapper >
    )
}

const MessageListWrapper = styled('div')`
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 12px 17px;
    display: flex;
    flex-direction: column;
`