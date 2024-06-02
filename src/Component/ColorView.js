import React, { useContext } from 'react'
import { ColorGenContext } from '../context/ColorGenContext'
import ColorBox from './ColorBox';
import ColorRounded from './ColorRounded';


function ColorView() {
    const { color, colorView, } = useContext(ColorGenContext);
if(colorView){
    return(
        <ColorRounded />
    )
}else{
    return(
        <ColorBox/>
    )
}
}

export default ColorView