import React from 'react'

function Footer() {
    let curYear = new Date().getFullYear();
  return (
    <>
    <div className="w-full bg-white shadow-lg flex justify-center items-center h-16">
        <div className="made-by flex items-center min-w-56 justify-center"><span className='text-xl'>&copy;</span> Copyrights {curYear} | Powered by <span className='name-logo-font text-xl px-2 animate-bounce text-slate-700'>AR</span></div>
    </div>
    </>
  )
}

export default Footer