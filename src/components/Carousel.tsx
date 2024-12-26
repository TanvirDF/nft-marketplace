import React from 'react';
import { useState, useEffect } from 'react';



interface CarouselProps {
    children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {

    const [curr, setCurr] = useState(0)

    const autoSlideTimer = 3000


    const next = () => setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        const slideInterval = setInterval(next, autoSlideTimer)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className='overflow-hidden flex flex-col '>
            <div className=''>
                <div className='flex items-start gap-2 pl-5'>
                    {children?.map((s, i) => (
                        <div key={i} className={`transition-all w-40 h-3 bg-black rounded-3xl  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
            <div className='flex transition-transform ease-out duration-500 mt-2' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {children}
            </div>
        </div>
//         <div className=' w-[1512px]  overflow-hidden'>
//             <div className='flex'>
//                 {children}
//             </div>
//         </div>
  );
};

export default Carousel;