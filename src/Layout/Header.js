import React, { useState } from 'react';

function Header(props) {
  const [shadesQuantity, setShadesQuantity] = useState(30);

  const handleRangeChange = (e) => {
    setShadesQuantity(e.target.value);
  };

  return (
    <>
      <header className='h-44 md:h-16 p-4 flex flex-col justify-center items-center bg-white w-full mb-8 shadow-lg'>
        <div className="logo-container flex items-center text-2xl font-bold text-slate-700 py-2 md:mt-4 mt-2">
          Colors <div className="icon animate-bounce"> 🖌</div> Shades
        </div>

        <div className="inputs flex flex-wrap gap-3 items-center justify-center">
          <div className="box-inputs flex items-center shadow-lg p-2 rounded-lg bg-slate-700">
            <input
              type="color"
              name="colorPick"
              id="colorPick"
              className='h-8 rounded-l-md'
              aria-label='Color picker input'
              onChange={props.PickerFunction}
            />
            <input
              type="text"
              name="colorName"
              id="colorName"
              className='h-8 w-44 rounded-r-md focus:outline-none p-1'
              placeholder='! Hex Color: #c544a3'
              aria-label='Color name write input'
              value={props.textInpColoValue}
            />
          </div>

          <div className="shades-control flex items-center shadow-lg p-2 rounded-lg bg-slate-700">
            <input
              type="text"
              name="shadesQuantityInput"
              id="shadesQuantityInput"
              className='h-8 w-24 rounded-l-md focus:outline-none p-1'
              placeholder='30'
              readOnly
              aria-label='shadesQuantity Input'
              value={shadesQuantity}
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
              onInput={handleRangeChange}
              value={shadesQuantity}
            />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
