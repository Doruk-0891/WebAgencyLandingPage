import { useSwiper } from 'swiper/react';
import { useState, useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <div className='absolute z-30 bottom-0 right-12'>
            {!isBeginning && <button className='border border-solid border-black-400 text-black-400 bg-white py-2 px-4 rounded-full uppercase  transition-all ease-in duration-150 hover:text-white hover:bg-black-400 z-50 active:scale-95 ' onClick={() => { swiper.slidePrev() }} >
                <FaArrowLeftLong />
            </button>}
        </div>
    );
}

export default CarouselLeftNavigation;