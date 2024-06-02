import React, { useState, useEffect, useContext } from 'react'
import { ColorGenContext } from '../context/ColorGenContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ColorRounded = () => {

    const { color,
        setColor,
        copied,
        setCopied,
        shades,
        setShades } = useContext(ColorGenContext);
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
            <div className=" p-4 flex flex-col">

                {/* <input className='text-black' type="color" onChange={(e)=>setColor(e.target.value)} /> */}
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {
                        shades.map((shade, index) => (
                            <CopyToClipboard
                                key={index}
                                text={shade}
                                onCopy={() => setCopied(index)}
                            >

<div className="flex flex-col items-center">

                                <div key={index} className={`w-12 h-28 rounded-full text-black cursor-pointer flex justify-center hover:items-center transition-all ease-in duration-300 group shadow-xl`} style={{ background: shade }}>

                                    <span className="bg-white p-1 mt-2 group-hover:m-0 text-xs rotate-90 rounded-md group-hover:font-bold group-hover:rounded-full group-hover:px-[18px] group-hover:py-[10px] font-mono group-hover:text-xl absolute shadow-xl transition-all	 ease-linear duration-100 web-logo" style={{ color: textColor }}>{copied === index ? '_Copied_' : shade}</span>
                                </div>

                                <div className={`circle w-12 h-12 rounded-full flex justify-center items-center group shadow-xl`} style={{background: shade, color: textColor }}><i class="fa-solid fa-copy bg-white w-6 h-6 flex justify-center items-center group-hover:absolute rounded-full group-hover:w-10 group-hover:h-10 group-hover:text-xl cursor-pointer transition-all ease-linear duration-100  "></i></div>


</div>
                            </CopyToClipboard>
                        ))
                    }
                </div>


            </div>

        </>
    )
}

export default ColorRounded