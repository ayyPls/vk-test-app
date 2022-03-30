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
    background-color: red;
    border-radius: 6px;
`

const MessageContent = styled('div')`
    width: 500px;
    height: 200px;
`