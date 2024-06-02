import React, { useState, useContext, useEffect } from 'react';
import Brush from '../assets/Icons/Icons';
import { ColorGenContext } from '../context/ColorGenContext';
import InputRange from './HeaderCoponents/InputRange';
import InputColor from './HeaderCoponents/InputColor';


function Header() {
  const [isActive,setIsActive] = useState(false)
  const {color, colorView, setColorView} = useContext(ColorGenContext);
  const [textColor, setTextColor] = useState(color);

  useEffect(() => {
    if (color === "#ffffff") {
      setTextColor("#222222");
    } else {
      setTextColor(color);
    }
  }, [color]);


  return (
    <>
    
      <header className='h-44 md:h-16 p-4 flex flex-col justify-center items-center bg-white w-full mb-8 shadow-lg web-logo'>

        <div className="logo-container web-logo flex items-center text-2xl font-bold text-slate-700 py-2 md:mt-4 mt-2">
          Colors <div className="icon animate-bounce" style={{fill:textColor}}> <Brush /></div> Shades

  <span className='absolute flex gap-2 right-4 ml-2'>
  <button
        className={`p-1 ${colorView ? 'shadow-md rounded' : 'bg-slate-50 hover:bg-slate-100 shadow-md rounded'}`}
        style={{
          backgroundColor: colorView ? textColor : 'inherit',
          color: colorView ? 'white' : textColor
        }}
        onClick={() => {
          setIsActive(false);
          setColorView(true);
        }}
      >
        <i className="fa-regular fa-circle"></i>
      </button>
      <button
        className={`p-1 ${isActive ? 'shadow-md rounded' : 'bg-slate-50 hover:bg-slate-100 shadow-md rounded'}`}
        style={{
          backgroundColor: isActive ? textColor : 'inherit',
          color: isActive ? 'white' : textColor
        }}
        onClick={() => {
          setIsActive(true);
          setColorView(false);
        }}
      >
        <i className="fa-regular fa-square"></i>
      </button>
  </span>

        </div>

        <div className="inputs flex flex-wrap gap-3 items-center justify-center">
<InputColor />

<InputRange />
        </div>

      </header>
      
    </>
  );
}

export default Header;
