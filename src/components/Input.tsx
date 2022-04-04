import React, { FC, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchGIF } from "../store/actionCreators/media";
import { GIFPicker } from './GIFPicker'

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
    images: IImages
}

export interface GiphyResponse {
    data: Array<GIF>,
    meta: any,
    pagination: any
}

export const Input: FC = () => {

    const regExp: RegExp = /^\/gif [^.,+-]+$/
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')


    const { media, error, isLoading } = useAppSelector(state => state.media)

    const dispatch = useDispatch()

    useEffect(() => {
        setOpen(regExp.test(message))
    }, [message])

    useEffect(() => {
        let isCanceled = false;
        if (open && regExp.test(message)) {
            if (!isCanceled) dispatch(fetchGIF(message.replace('/gif ', '')))
        }
        //return to prevent render old data
        return () => { isCanceled = true; }
    }, [open, message])

    const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    const handleOpenGIFPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMessage('/gif ' + message.replace('/gif ', ''))
    }

    return (
        <>
            {open ? <GIFPicker gifList={media} error={error} isLoading={isLoading} /> : null}
            <InputWrapper className='input'>
                <CustomInput type='text' placeholder="Напишите сообщение..." value={message} onChange={handleChangeInputValue} autoFocus={true} />
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