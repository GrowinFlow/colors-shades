import React, { useContext } from 'react'
import { ColorGenContext } from '../context/ColorGenContext';

function Footer() {

  const {color} = useContext(ColorGenContext);
    let curYear = new Date().getFullYear();
  return (
    <>
    <div className="w-full bg-white shadow-lg flex justify-center items-center h-16">
        <div className="made-by flex items-center min-w-56 justify-center text-sm md:text-lg lg:text-xl">©copyrights {curYear} |Powered by <span className='name-logo-font text-xl px-2 animate-bounce text- font-medium md:font-bold' style={{color:color}}>AR</span></div>
    </div>
    </>
  )
}

export default Footer