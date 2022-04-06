import { FC } from "react";
import styled from "styled-components";
import { UserIcon } from "./assets/Icons";


export const Message: FC<{ mediaURL: string }> = ({ mediaURL }) => {
    return (
        <MessageWrapper className='message'>
            <UserAvatar>{UserIcon}</UserAvatar>
            <MessageContent><img src={mediaURL} /></MessageContent>
        </MessageWrapper>
    )
}


const MessageWrapper = styled('div')`
    display: flex;
    align-items: flex-end;
    border-radius: 12px;
    margin-top: 10px;
    width: fit-content;
`

const MessageContent = styled('div')`
    display: inline;

    & img{
        min-width: 350px;
        max-width: 70%;
        border-radius: 12px;
    }
`

const UserAvatar = styled('div')`
    padding: 10px;
    svg{
        width: 36px;
        height: 36px;
    }
`