import React from 'react'

function Flood() {
    return (
        <div className='flex flex-wrap w-full h-full items-center justify-center p-5 gap-4'>
            <button
                className='bg-white border-[1px] border-black text-black text-sm p-4 px-10 flex items-center justify-center font-semibold rounded-sm transition duration-150 ease-in-out' disabled>
                Flood1
            </button>
            <button
                className='bg-white border-[1px] border-black text-black text-sm p-4 px-10 flex items-center justify-center font-semibold rounded-sm transition duration-150 ease-in-out' disabled>
                Flood2
            </button>
            <button
                className='bg-white border-[1px] border-black text-black text-sm p-4 px-10 flex items-center justify-center font-semibold rounded-sm transition duration-150 ease-in-out' disabled>
                Flood3
            </button>
            <button
                className='bg-white border-[1px] border-black text-black text-sm p-4 px-10 flex items-center justify-center font-semibold rounded-sm transition duration-150 ease-in-out' disabled>
                Flood4
            </button>
        </div>
    )
}

export default Flood