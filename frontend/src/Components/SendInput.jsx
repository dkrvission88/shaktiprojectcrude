import React from 'react'
import { IoMdSend } from "react-icons/io";

const SendInput = () => {
  return (
    <form className='px-4 my-3 '>
        <div className='w-full relative'>
            <input type='text' placeholder='send a message ...'
            className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white'/>
            <button type='submit' className='absolute flex inset-y-0 end-0 pr-4  items-center'>
            <IoMdSend />
            </button>
        </div>
    </form>
  )
}

export default SendInput