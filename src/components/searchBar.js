import React ,{useState} from 'react'
import {BiSearch} from "react-icons/bi"


function SearchBar({onSearch}){
  const [word,setWord]=useState('');
  return (
    <div>
      <form className='mx-4  w-auto shadow-lg rounded-full flex relative
       lg:mx-60'
        onSubmit={(event)=>{
          event.preventDefault()
          onSearch(word)
        }}
      >
          <input type="text"
          placeholder='Search...'
          onChange={(event)=>{setWord(event.target.value)}}
          value={word}
          className=" w-full rounded-full bg-white
          px-5 py-3  lg:rounded-lg "
          />
          <button  className="search-icon text-white rounded-full h-full
            bg-blue-400 aspect-square flex items-center justify-center absolute top-0 right-0
             lg:static lg:p-5 lg:aspect-auto lg:rounded-lg lg:gap-2 " 
            type='submit'
            >
              <h3 className=' hidden lg:block'>Search </h3>
              <BiSearch className=' text-xl'/>
          </button>
      </form>
    </div>
  )
}

export default SearchBar