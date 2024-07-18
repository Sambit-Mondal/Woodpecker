import React, { useState } from 'react'
import Earthquake from './Earthquake';
import Flood from './Flood';
import Cyclone from './Cyclone';

function LeftBox() {
    const [earthquake, setEarthquake] = useState(true);
    const [flood, setFlood] = useState(false);
    const [cyclone, setCyclone] = useState(false);

    const isEarthquake = () => {
        setEarthquake(true);
        setFlood(false);
        setCyclone(false);
    }

    const isFlood = () => {
        setEarthquake(false);
        setFlood(true);
        setCyclone(false);
    }

    const isCyclone = () => {
        setEarthquake(false);
        setFlood(false);
        setCyclone(true);
    }

  return (
    <div className='w-full lg:w-[95vw] h-full lg:h-[70%] m-5 lg:mr-5 lg:my-5 lg:ml-0 py-5 lg:py-0 px-5 flex flex-col items-center justify-center gap-5 bg-bg rounded-sm'>
        <div className='flex flex-wrap flex-[0.5] bg-screen lg:w-full h-full lg:h-full rounded-sm mb-4'>
            {earthquake && <Earthquake />}
            {flood && <Flood />}
            {cyclone && <Cyclone />}
        </div>
        <div>
            <button className='bg-white text-black p-3 px-8 flex items-center justify-center font-semibold rounded-md'>Show data</button>
        </div>
        <hr className='w-full border-0 bg-white h-[2px] mb-2 mt-5 lg:mt-5' />
        <div className='flex items-center justify-around w-full gap-1 gap-y-3 xl:gap-3 flex-wrap'>
            <button className='bg-white border-[1px] border-black text-black text-sm p-3 flex items-center justify-center font-semibold rounded-full transition duration-150 ease-in-out hover:bg-gray-500 hover:text-white' onClick={isEarthquake}>Earthquake</button>
            <button className='bg-white border-[1px] border-black text-black text-sm p-3 px-7 flex items-center justify-center font-semibold rounded-full transition duration-150 ease-in-out hover:bg-gray-500 hover:text-white' onClick={isFlood}>Flood</button>
            <button className='bg-white border-[1px] border-black text-black text-sm p-3 px-7 flex items-center justify-center font-semibold rounded-full transition duration-150 ease-in-out hover:bg-gray-500 hover:text-white' onClick={isCyclone}>Cyclone</button>
        </div>
    </div>
  )
}

export default LeftBox