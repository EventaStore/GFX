import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
// Import Swiper styles

SwiperCore.use([Autoplay]);
export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            effect='fade'
          
            autoplay={{ delay: 3000 }}
        >
            {Array.from({ length: 2 }).map((_, index) => (
                <SwiperSlide key={index} >
                    <div className={`py-16 my-12 text-white text-center transition ${index==0?" bg-gray-600":" bg-blue-900"}`}>Slide {index + 1}</div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};