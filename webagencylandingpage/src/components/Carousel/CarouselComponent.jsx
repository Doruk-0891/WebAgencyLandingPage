import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const CarouselComponent = (props) => {
    const { slides } = props;
    return (
        <div className="h-full relative">
            <Swiper
                initialSlide={0}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                allowTouchMove
                className='h-full'
            >
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    slides.map((item, idx) => (
                        <SwiperSlide key={item['title'] + idx}>
                            <div className="flex gap-5 h-full">
                                <div className="basis-1/3 h-full">
                                    <img src={item['image']} alt='Testimonial' className='w-full h-full object-cover' />
                                </div>
                                <div className="basis-2/3 flex flex-col justify-between text-lg md:text-2xl h-full">
                                    <p>
                                        {item['description']}
                                    </p>
                                    <div>
                                        <p className='font-bold uppercase'><span className='text-md md:text-3xl'>{item['name']},</span> {item['title']}</p>
                                        <p className='opacity-80 uppercase text-sm'>{item['designation']}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CarouselComponent;