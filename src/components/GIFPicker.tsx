import { FC } from "react";
import styled from "styled-components";

export const GIFPicker: FC<{ open: boolean }> = ({ open }) => {


    return (
        open ?
            <GIFPickerWrapper className='gif-picker'>
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
            : <></>
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

    & div{
        width: 118px;
        height: 118px;
        background-color: red;
    }
`