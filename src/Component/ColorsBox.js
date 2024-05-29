import React, { useState, useEffect, useContext } from 'react'
import { ColorGenContext } from '../context/ColorGenContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Colors = () => {

    const { color,
        setColor,
        copied,
        setCopied,
        shades,
        setShades } = useContext(ColorGenContext);

    return (
        <>
            <div className=" p-4 flex flex-col">

                {/* <input className='text-black' type="color" onChange={(e)=>setColor(e.target.value)} /> */}
                <div className="flex flex-wrap items-center justify-center">
                    {
                        shades.map((shade, index) => (
                            <CopyToClipboard
                                key={index}
                                text={shade}
                                onCopy={() => setCopied(index)}
                            >

                                <div key={index} className={`min-w-24 flex-grow md:min-w-44 lg:min-w-80 h-28 md:h-36 text-black cursor-pointer flex justify-center hover:items-center transition-all ease-in duration-300 group`} style={{ background: shade }}>

                                    <span className="bg-white p-1 mt-2 group-hover:m-0 text-sm rounded-md group-hover:font-bold group-hover:rounded-none font-mono group-hover:text-2xl absolute shadow-xl transition-all	 ease-linear duration-100 web-logo" style={{ color: color }}>{copied === index ? 'Copied' : shade}</span>

                                </div>
                            </CopyToClipboard>
                        ))
                    }
                </div>


            </div>

        </>
    )
}

export default Colors