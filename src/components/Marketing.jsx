import React, { useState } from 'react'

const Marketing = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className='mt-24 relative'>
            <div className='marBg1 absolute z-10 max-md:hidden' ></div>
            <div className='flex w-screen '>
                <img src="/Rectangle 24.png" className='w-1/3 '/>
                <img src="/Rectangle 25.png" className='w-1/3 cursor-pointer' onMouseEnter={() => setIsHidden(false)} onMouseLeave={() => setIsHidden(true)}/>
                <img src="/Group 34.png"  className={`w-1/4 left-1/3 mx-10 absolute top-1/4 h-1/2  ${isHidden?"hidden" : ""} bg-transparent`}/>
                <img src="/Rectangle 26.png" className='w-1/3'/>
            </div>
            <div className='marBg2 absolute bottom-0 max-md:hidden'>
                <img src="/Frame 67.png" alt="" className='mx-auto mt-10'/>
            </div>

        </div>
    )
}

export default Marketing