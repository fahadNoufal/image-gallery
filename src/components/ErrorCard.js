import React from 'react'
import {TbFaceIdError} from "react-icons/tb"

const ErrorCard = () => {
  return (
    <div className=' rounded-xl shadow-xl p-0 m-6 mt-10 sm:mx-20 lg:mx-60 lg:mt-20 xl:mx-96'>
        <div className=' bg-red-500 rounded-xl rounded-b-none flex justify-center p-20 '>
            <TbFaceIdError className=' text-5xl text-white'/>
        </div>
        <div className=' flex flex-col justify-center items-center p-6 lg:py-14'>
            <h2 className=' font-extrabold pb-2 text-2xl'>Oh snap!!</h2>
            <h5 className=' text-center'>Unable to find any image with this tag. Try searching another!</h5>
            
        </div>
    
    </div>
  )
}

export default ErrorCard