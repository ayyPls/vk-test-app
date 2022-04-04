import { FC } from "react";
import styled from "styled-components";

export const Message: FC = () => {
    return (
        <MessageWrapper className='message'>
            <MessageContent />
        </MessageWrapper>
    )
}


const MessageWrapper = styled('div')`
    display: inline-flex;
    background-color: #C4C4C4;
    border-radius: 6px;
    margin-top: 10px;
    width: 70%;
`

const MessageContent = styled('div')`
    width: 500px;
    height: 200px;
`