import { FC, useEffect } from "react";
import styled from "styled-components";
import { searchGIF } from "../api/giphy";

export const GIFPicker: FC = () => {

    useEffect(() => { 
        console.log(searchGIF('cats'))
    }, [])


    return (
        <GIFPickerWrapper>
            <Grid>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Grid>
        </GIFPickerWrapper>
    )
}


const GIFPickerWrapper = styled('div')`
    box-sizing: border-box;
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
    overflow-y: scroll;
    display: grid;
    gap: 10px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);

    & div{
        width: 100px;
        height: 118px;
        background-color: red;
    }



`