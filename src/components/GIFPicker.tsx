import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchGIF } from "../store/actionCreators/media";
import {
    GIF,
} from "./Input";

const GIFItem: FC<{ gif: GIF }> = ({ gif }) => {
    return (
        <ImageWrapper>
            <img src={gif.images.preview_gif.url} />
        </ImageWrapper>
    )
}

export const GIFPicker: FC<{ query: string }> = ({ query }) => {

    const regExp: RegExp = /^\/gif [^.,+-]+$/
    const [offset, setOffset] = useState(0)
    const [scrollValue, setScrollValue] = useState(0)
    const { media, error, isLoading } = useAppSelector(state => state.media)
    const dispatch = useDispatch()


    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
        const scrollTop = event.currentTarget.scrollTop;
        setScrollValue(((containerHeight + scrollTop) / scrollHeight) * 100);
    }

    useEffect(() => {
        if (scrollValue >= 95) {
            setOffset((prev) => prev + 12)
        }
    }, [scrollValue])

    useEffect(() => {
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
        <GIFPickerWrapper className='gif-picker' onScroll={handleScroll}>
            {error ? <ErrorMessage>{error}</ErrorMessage> :
                <Grid>
                    {
                        media?.map(gif =>
                            <GIFItem key={gif.id} gif={gif} />)
                    }
                </Grid>
            }
        </GIFPickerWrapper>
    )
}


const GIFPickerWrapper = styled('div')`
    position: absolute;
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
    background-color: #C4C4C4;

    & img{
        width: 100%;
        height: 100%;
    }
`

const ErrorMessage = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`