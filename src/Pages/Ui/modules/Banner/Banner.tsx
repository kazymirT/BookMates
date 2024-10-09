import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Banner.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { BANNER_DATA } from './data';
import Slide from './Slide/Slide';
import { SliderButton } from '../../components/SliderButton/SliderButton';

const Banner = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <div className={styles.banner}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        <SliderButton
          onNext={handleNext}
          onPrev={handlePrev}
          variant="banner"
        />
      </Swiper>
    </div>
  );
};

export default Banner;
