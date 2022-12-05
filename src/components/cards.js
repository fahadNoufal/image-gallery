import React from 'react'
import {AiFillHeart} from "react-icons/ai"

const cards = ({title,imageUrl,views,likes,downloads,tags}) => {


    function getTags(){
        let AllTags=tags.split(",");
        return AllTags.map((tg,index)=>{
            return(
            <li key={index} className=" bg-black opacity-30 rounded-lg px-2 flex py-1 text-white text-xs
             hover:opacity-90" >
                #{tg}

            </li>
            )
        })
    }

    return (
    <div className='w-auto mx-6 mt-8' >
        <div style={{backgroundImage:`url(${imageUrl})`}} 
        className=' bg-cover bg-center rounded-lg h-36 flex flex-col justify-between'>
            
            <div className='p-4 flex justify-between items-start'>
                <div>
                    <h4 className=' font-serif text-xs -mb-1  text-white opacity-70 font-bold'>PHOTO BY</h4>
                    <h2 className=" font-bold text-white text-lg">
                        {title}
                    </h2>
                </div>
                <div className='  bg-black opacity-50 rounded-full p-2 w-min'>
                    <AiFillHeart className=' text-white text-xs'/>
                </div>

            </div>
            <ul className="hashtags  p-4 flex gap-2 justify-end ">
                {getTags()}
            </ul>
        </div>
        <div className="mt-1 views-likes flex justify-between px-2 font-semibold text-xs opacity-50">
            <div className="photo-num">
                {likes} likes
            </div>
            <div className='views  '>
                {views} views
            </div>
        </div>
    </div>
  )
}

export default cards    