import { FC } from "react";
import styled from "styled-components";

export const Input: FC = () => {
    return (
        <InputWrapper>
            <CustomInput placeholder="Напишите сообщение..."/>
        </InputWrapper>
    )
}


const InputWrapper = styled('div')`
    padding: 13px 16px;
    border-top: 1px solid #D3D9DE;
`


const CustomInput = styled('input')`
    box-sizing: border-box;
    width: 100%;
    padding: 9px 12px;
    border: 1px solid #D3D9DE;
    height: 36px;
    border-radius: 6px;
`