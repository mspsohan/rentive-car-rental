// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination, Autoplay, } from 'swiper/modules';

export default function Slider() {


   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/client-logo-2.png" alt="" className='opacity-50 hover:opacity-100' />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/client-logo-3.png" alt="" className='opacity-50 hover:opacity-100' />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/client-logo-4.png" alt="" className='opacity-50 hover:opacity-100' />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://templatekit.jegtheme.com/rentive/wp-content/uploads/sites/62/2021/03/client-logo-5.png" alt="" className='opacity-50 hover:opacity-100' />
            </SwiperSlide>

         </Swiper>
      </>
   );
}
