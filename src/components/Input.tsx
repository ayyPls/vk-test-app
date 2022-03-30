import React, { FC, useState } from "react";
import styled from "styled-components";
import { GIFPicker } from './GIFPicker'

export const Input: FC = () => {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')

    const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.value)
        setMessage(event.target.value)
    }
    const handleOpenGIFPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMessage('/gif')
    }

    return (
        <>
            <GIFPicker open={open}/>
            <InputWrapper className='input'>
                <CustomInput type='text' placeholder="Напишите сообщение..." onChange={handleChangeInputValue} value={message}/>
                <InputHelper onClick={handleOpenGIFPicker} >icon</InputHelper>
            </InputWrapper>
        </>

    )
}


const InputWrapper = styled('div')`
    display: flex;
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
const InputHelper = styled('button')`
    width: 36px;
`