import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import styles from './Slider.module.scss';
import BookCard from '@/components/BookCard/BookCard';
import ArrowIcon from '@/components/svg/arrow/Arrow';
import { useGetBooksQuery } from '@/redux/services/books';

const SlideNextButton = () => {
  const [isNextSlide, setIsNextSlide] = useState<boolean>(true);
  const swiper = useSwiper();

  useEffect(() => {
    const handleSlideChange = () => {
      const { isBeginning, isEnd } = swiper;
      if (isBeginning) {
        setIsNextSlide(true);
      } else if (isEnd) {
        setIsNextSlide(false);
      }
    };

    swiper.on('slideChange', handleSlideChange);

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  const handleNavigate = () => {
    if (isNextSlide) {
      swiper.slideTo(swiper.slides.length - 1);
    } else {
      swiper.slideTo(0);
    }
  };

  const buttonClassName = classNames(styles.btn, {
    [styles.prev]: !isNextSlide,
  });

  return (
    <button onClick={handleNavigate} className={buttonClassName}>
      <ArrowIcon />
    </button>
  );
};

const Slider = () => {
  const { data: books } = useGetBooksQuery({ size: '8' });
  return (
    <div className={styles.slider}>
      <Swiper
        className={styles.swiper}
        spaceBetween={24}
        slidesPerView={'auto'}
        modules={[Pagination]}
        speed={2000}
      >
        {books &&
          books.content.map((book) => (
            <SwiperSlide key={book.id} className={styles['swiper-slide']}>
              <BookCard data={book} />
            </SwiperSlide>
          ))}
        <SlideNextButton />
      </Swiper>
    </div>
  );
};

export default Slider;
