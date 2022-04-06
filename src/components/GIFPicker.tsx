import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { clearMedia, fetchGIF } from "../store/actionCreators/media";
import { sendMessage } from "../store/actionCreators/message";
import {
    GIF,
} from "./Input";

const GIFItem: FC<{ gif: GIF }> = ({ gif }) => {

    const dispatch = useDispatch()

    const handleClick = (e: any) => {
        return dispatch(sendMessage(gif.id, gif.images.preview_gif.url))
    }

    return (
        <ImageWrapper onClick={handleClick}>
            <img src={gif.images.preview_gif.url} />
        </ImageWrapper>
    )
}

export const GIFPicker: FC<{ query: string }> = ({ query }) => {

    const [offset, setOffset] = useState(0)
    const [scrollValue, setScrollValue] = useState(0)
    const { media, error } = useAppSelector(state => state.media)
    const dispatch = useDispatch()

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
        const scrollTop = event.currentTarget.scrollTop;
        setScrollValue(((containerHeight + scrollTop) / scrollHeight) * 100);
    }

    useEffect(()=>{
        dispatch(clearMedia())
    }, [query])


    useEffect(() => {
        if (scrollValue >= 100) {
            setOffset((prev) => prev + 12)
        }
    }, [scrollValue])

    useEffect(() => {
        const regExp: RegExp = /^\/gif [^.,+-]+$/

        const abortController = new AbortController();
        const { signal } = abortController;

        if (regExp.test(query)) {
            if (!signal.aborted) {
                dispatch(fetchGIF(query.replace('/gif ', ''), offset, signal))
            }
        }
        //abort api call on component unmount
        return () => { abortController.abort() }
    }, [query, offset])

    return (
        <GIFPickerWrapper className='gif-picker' onScroll={handleScroll} id='xui'>
            {
                error ? <ErrorMessage>{error}</ErrorMessage> :
                    media.length ?
                        <Grid>
                            {
                                media?.map((gif: GIF, index) =>
                                    <GIFItem key={index} gif={gif} />)
                            }

                        </Grid>
                        :
                        <ErrorMessage>no gifs found :(</ErrorMessage>

            }
        </GIFPickerWrapper>
    )
}


const GIFPickerWrapper = styled('div')`
    // position: absolute;
    border: 1px solid #D3D9DE;
    border-radius: 6px;
    height: calc(100% - 111px);
    width: calc(100% - 34px);
    margin: 22px 17px;
    padding: 9px 10px;
    overflow-y: scroll;
    background-color: white;

`


const Grid = styled('div')`
    display: grid;
    gap: 10px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
`

const ImageWrapper = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    border-radius: 6px;

    & img{
        width: 100%;
        height: 100%;
    }
`

export const ErrorMessage = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #292626;

`