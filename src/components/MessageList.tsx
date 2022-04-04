import { FC } from "react";
import styled from "styled-components";
import { Message } from "./Message";

export const MessageList: FC = () => {
    return (

        <MessageListWrapper className='message-list'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </MessageListWrapper>
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