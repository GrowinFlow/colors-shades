import React, { useState, useContext } from 'react';
import Brush from '../assets/Icons/Icons';
import { ColorGenContext } from '../context/ColorGenContext';
import InputRange from './HeaderCoponents/InputRange';
import InputColor from './HeaderCoponents/InputColor';


function Header() {
  
  const {color} = useContext(ColorGenContext);


  return (
    <>
    
      <header className='h-44 md:h-16 p-4 flex flex-col justify-center items-center bg-white w-full mb-8 shadow-lg web-logo'>

        <div className="logo-container web-logo flex items-center text-2xl font-bold text-slate-700 py-2 md:mt-4 mt-2">
          Colors <div className="icon animate-bounce" style={{fill:color}}> <Brush /></div> Shades
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
