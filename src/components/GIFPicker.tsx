import { FC } from "react";
import styled from "styled-components";
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

export const GIFPicker: FC<{ gifList: Array<GIF> | null, error: string | null, isLoading: boolean }> = ({ gifList, error, isLoading }) => {

    return (
        <GIFPickerWrapper className='gif-picker'>
            {error ? <ErrorMessage>{error}</ErrorMessage> :
                <Grid>
                    {
                        gifList?.map(gif =>
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