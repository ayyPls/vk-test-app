import { FC } from "react";
import styled from "styled-components";
import {
    GIF,
    // GiphyResponse
} from "./Input";


const GIFImage: FC<{ gif: GIF }> = ({ gif }) => {
    return (
        <ImageWrapper>
            <img src={gif.images.preview_gif.url} />
        </ImageWrapper>
    )
}

export const GIFPicker: FC<{ gifList: Array<any> | null, error: string | null }> = ({ gifList, error }) => {

    return (
        <GIFPickerWrapper className='gif-picker'>
            {error}
            <Grid>
                {
                    gifList?.map(gif =>
                        <GIFImage key={gif.id} gif={gif} />)
                }
            </Grid>
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
    // border: 1px solid red;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 6px;
    // background-color: #ccc;

    & img{
        width: 100%;
        // height: auto;
    }
`