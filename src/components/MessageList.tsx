import { FC } from "react";
import styled from "styled-components";

export const MessageList: FC = () => {
    return (

        <MessageListWrapper/>
    )
}

const MessageListWrapper = styled('div')`
height: 100%;
width: 100%;
// background-color: grey;

`


const Block = styled('div')`
    // border: 1px solid blue;
    height: 100%;
    width: 100%;
    background-color: grey;

`