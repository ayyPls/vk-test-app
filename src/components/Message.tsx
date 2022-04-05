import { FC } from "react";
import styled from "styled-components";

export const Message: FC<{ mediaURL: string }> = ({ mediaURL }) => {
    return (
        <MessageWrapper className='message'>
            <MessageContent><img src={mediaURL} /></MessageContent>
        </MessageWrapper>
    )
}


const MessageWrapper = styled('div')`
    display: inline-flex;
    background-color: #C4C4C4;
    border-radius: 12px;
    margin-top: 10px;
    width: 70%;
`

const MessageContent = styled('div')`
    width: 100%;
    height: 100%;
    & img{
        width: 100%;
        height: 100%;
        border-radius: 12px;
    }
`