import React from 'react'
import { FiUser } from 'react-icons/fi'
import FiveStars from './ui/FiveStars'

function CommentaryCard({username, date, rate, comments}) {
  return (
    <div className=' flex flex-col justify-center items-start text-[#414141] '>
        <div className='flex flex-row items-center justify-start gap-2 p-2'>
             <FiUser />
             <p>{username}</p>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 p-2 text-sm'>
            <FiveStars rate={rate} disabled/>
            <p className=' text-xs text-[#b1b1b1]'>{date}</p>
        </div>
        <div className='flex flex-row items-center justify-start gap-2 p-2 text-sm w-full text-justify'>
            {comments}
        </div>

    </div>
  )
}

export default CommentaryCard