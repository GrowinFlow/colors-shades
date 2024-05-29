import React, { useContext } from 'react'
import { ColorGenContext } from '../../context/ColorGenContext'


function InputRange() {
    const {color, steps, setSteps,} = useContext(ColorGenContext);

  return (
    <>

<div className="shades-control flex items-center shadow-lg p-2 rounded-lg bg-slate-700">
            <input
              type="text"
              name="shadesQuantityInput"
              id="shadesQuantityInput"
              className='h-8 w-24 rounded-l-md focus:outline-none p-1'
              placeholder={steps}
              aria-label='shadesQuantity Input'
              value={steps}
              onChange={(e)=>{setSteps(e.target.value)}}
            />
            <div className=" bg-white h-8 flex justify-center items-center rounded-r-md overflow-hidden px-1 input-range">

            <input
              type="range"
              name="shadesQuantity"
              id="shadesQuantity"
              className='h-8 cursor-e-resize active:cursor-e-resize'
              aria-label='shadesQuantity range input'
              min={10}
              max={200}
              onChange={(e)=>{setSteps(e.target.value)}}
              value={steps}
              style={{}}
            />
            </div>
          </div>
        <style jsx="true">{`
        .input-range input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: ${color};
          border: 2px solid #ccc;
          border-radius: 30%;
        }
        .input-range input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: ${color};
          border: 2px solid #ccc;
          border-radius: 30%;
        }
        .input-range input[type='range']::-ms-thumb {
          width: 20px;
          height: 20px;
          background: ${color};
          border: 2px solid #ccc;
          border-radius: 30%;
        }
      `}</style>
    </>
  )
}

export default InputRange