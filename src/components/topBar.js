import React from 'react'
import {CgMenuGridR} from "react-icons/cg"
import {BiAddToQueue} from "react-icons/bi"

const topBar = () => {
  return (
    <div className='w-full px-6 py-4 flex items-center '>
        <div className="title font-bold w-full text-2xl md:text-4xl lg:text-5xl">
            Albums
        </div>
        <div className="menu opacity-40 px-2 text-2xl">
            <CgMenuGridR/>
        </div>
        <div className=' text-2xl pl-3 opacity-40'>
            <BiAddToQueue/>
        </div>

    </div>
  )
}

export default topBar