import { FC, useRef } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './ProductSlider.module.scss';
import { ProductSliderProps } from './types';
import 'swiper/css';
import ProductCard from '../ProductCard/ProductCard';
import { SliderButton } from '../SliderButton/SliderButton';

const ProductSlider: FC<ProductSliderProps> = ({ data, slidesPerGroup }) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext(1500);
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev(1500);
  };
  return (
    <div className={styles['product-slider']}>
      <div className={styles.slider}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={styles.swiper}
          spaceBetween={46}
          navigation
          slidesPerView={4}
          slidesPerGroup={slidesPerGroup}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 3000,
            // disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
        >
          {data &&
            data.content.map((banner) => (
              <SwiperSlide key={banner.id}>
                <ProductCard data={banner} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <SliderButton onNext={handleNext} onPrev={handlePrev} variant="section" />
    </div>
  );
};

export default ProductSlider;
