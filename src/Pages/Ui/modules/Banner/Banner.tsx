import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Banner.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BANNER_DATA } from './data';
import Slide from './Slide/Slide';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Swiper
        className={styles.swiper}
        pagination={{
          clickable: true,
        }}
        spaceBetween={25}
        navigation
        initialSlide={1}
        slidesPerView={'auto'}
        loopAdditionalSlides={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {BANNER_DATA &&
          BANNER_DATA.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Slide slide={banner} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
