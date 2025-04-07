import React from 'react'
import FiveStars from './ui/FiveStars'
import CommentaryCard from './cards/CommentaryCard'
import CommentaryForm from './CommentaryForm'

function Testimonials() {
  return (
    <div className=' flex flex-col gap-6 items-start text-[#414141] w-full'>
        <h3 className='text-4xl font-extrabold text-left'>Отзывы
        </h3>
        <div className='grid grid-cols-9 gap-6 w-full'>
            <div className='col-span-2 flex flex-col items-start gap-6'>
                <div className='flex flex-row gap-4 items-center justify-start'>
                    <FiveStars disabled rate={4}/>
                    <p className=' font-extrabold text-lg '>4 из 5</p>

                </div>
                <div className=' grid grid-cols-7 justify-center gap-4 text-sm'>
                    <div className='flex flex-col h-fit gap-2'>
                            <p>5</p>
                            <p>4</p>
                            <p>3</p>
                            <p>2</p>
                            <p>1</p>
                    </div>
                    <div className='col-span-5 flex flex-col h-full justify-between items-center py-1'>
                        <FiveStars rate={5} disabled/>
                        <FiveStars rate={4} disabled/>
                        <FiveStars rate={3} disabled/>
                        <FiveStars rate={2} disabled/>
                        <FiveStars rate={1} disabled/>
                    </div>
                    <div className='flex flex-col h-fit gap-2'>
                            <p>1</p>
                            <p>0</p>
                            <p>2</p>
                            <p>1</p>
                            <p>2</p>
                    </div>
                </div>


            </div>
            <div className='col-span-5 flex flex-col gap-6'>
                <CommentaryCard username={`Татьяна`} rate={4} date={`20.03.2025`} comments={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat cupiditate velit at. Qui vel soluta repellendus nihil repudiandae, pariatur eligendi odit excepturi alias tempora explicabo culpa aspernatur iure porro. `}/>
                <CommentaryCard username={`Алексей`} rate={5} date={`20.03.2025`} comments={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat cupiditate velit at. Qui vel soluta repellendus nihil repudiandae, pariatur eligendi odit excepturi alias tempora explicabo culpa aspernatur iure porro. `}/>
                <CommentaryCard username={`Абылай`} rate={1} date={`20.03.2025`} comments={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat cupiditate velit at. Qui vel soluta repellendus nihil repudiandae, pariatur eligendi odit excepturi alias tempora explicabo culpa aspernatur iure porro. `}/>
                <CommentaryForm/>

            </div>
            <div className='col-span-2'/>
        </div>

    </div>
  )
}

export default Testimonials