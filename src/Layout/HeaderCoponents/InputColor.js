import React, { useContext } from 'react'
import { ColorGenContext } from '../../context/ColorGenContext'


function InputColor() {
    const {color, setColor} = useContext(ColorGenContext);

  return (
    <>
              <div className="box-inputs flex items-center shadow-lg p-2 rounded-lg bg-slate-700">
            <input
              type="color"
              name="colorPick"
              id="colorPick"
              className='h-8 rounded-l-md'
              aria-label='Color picker input'
              onChange={(e)=>{setColor(e.target.value)}}
            />
            <input
              type="text"
              name="colorName"
              id="colorName"
              className='h-8 w-44 rounded-r-md focus:outline-none p-1'
              placeholder={`Hex Code: ${color}`}
              aria-label='Color name write input'
              onChange={(e)=>{setColor(e.target.value)}}
            />
          </div>
    
    </>
  )
}

export default InputColor