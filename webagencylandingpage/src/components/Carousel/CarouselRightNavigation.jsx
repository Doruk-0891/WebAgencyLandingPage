import { useState, useEffect } from "react";
import { useSwiper } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";


const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd);
        });
    }, [swiper]);

    return (
        <div className='absolute z-30 bottom-0 right-0'>
            {!isEnd && <button className="bg-red-400 border border-solid border-red-400 py-2 px-4 rounded-full uppercase text-white hover:bg-white  transition-all ease-in duration-150 hover:text-red-400 z-50 active:scale-95"
                onClick={() => { swiper.slideNext() }}>
                <FaArrowRightLong />
            </button>}
        </div>
    );
}

export default CarouselRightNavigation;
