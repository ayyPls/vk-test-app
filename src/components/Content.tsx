import { FC } from "react";
import styled from "styled-components";
import { GIFPicker } from "./GIFPicker";
import { Input } from "./Input";
import { MessageList } from "./MessageList";

export const Content: FC = () => {
    return (
        <ContentWrapper className='content'>
            <MessageList />
            <Input />
        </ContentWrapper>
    )
}


const ContentWrapper = styled('div')`
    position: absolute;
    display: flex;
    flex-direction: column;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 50%;
    border: 1px solid #D3D9DE;
`

