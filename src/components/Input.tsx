import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { clearMedia } from "../store/actionCreators/media";
import { CloseIcon, GifIcon } from "./assets/Icons";
import { GIFPicker } from './GIFPicker';


interface ImageData {
    height: number,
    width: number,
    size: number,
    url: string
}

interface IImages {
    original: ImageData,
    downsized: ImageData,
    downsized_large: ImageData,
    downsized_medium: ImageData,
    downsized_small: ImageData,
    downsized_still: ImageData,
    fixed_height_downsampled: ImageData,
    fixed_height_small: ImageData,
    preview_gif: ImageData
    preview: ImageData
}

export interface GIF {
    type: 'gif',
    id: string,
    images: IImages,
}

export interface GiphyResponse {
    data: Array<GIF>,
    meta: any,
    pagination: any
}





export const Input: FC = () => {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const { messages } = useAppSelector(state => state.messages)
    const dispatch = useDispatch()
    

    useEffect(() => {
        const regExp: RegExp = /^\/gif [^.,+-]+$/
        setOpen(regExp.test(message))
    }, [message])

    useEffect(() => {
        setOpen(false)
        setMessage('')
    }, [messages.length])

    const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    const handleOpenGIFPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMessage('/gif ' + message.replace('/gif ', ''))
    }
    const handleCloseGIFPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(clearMedia())
        setMessage('')
    }

    return (
        <>
            {open ? <GIFPicker query={message} /> : null}
            <InputWrapper className='input'>
                <CustomInput type='text' placeholder="Напишите сообщение..." value={message} onChange={handleChangeInputValue} autoFocus={true} />

                {
                    // no media update on handleOpenGIFPicker
                    open ? <InputHelper onClick={handleCloseGIFPicker} >{CloseIcon}</InputHelper> : <InputHelper onClick={handleOpenGIFPicker} >{GifIcon}</InputHelper>
                }

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

    :focus{
        outline: 1px solid #292626;
    }
`
const InputHelper = styled('button')`
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`