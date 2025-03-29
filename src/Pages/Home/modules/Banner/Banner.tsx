import styles from './Banner.module.scss';
import { SLIDE_OF_SLIDER } from './constants';
import { BANNER_DATA } from './data';
import Slide from './Slide/Slide';
import SkeletonBannerSlide from '@/components/Skeleton/SkeletonBannerSlide';
import Slider from '@/components/Slider/Slider';

const Banner = () => {
  const isSkeleton = false;
  return (
    <div className={styles.banner}>
      <Slider
        arrows
        sliderCL="banner"
        variant="banner"
        initialSlide={0}
        slidesToScroll={1}
        slidesToShow={1}
        dots
      >
        {isSkeleton
          ? Array.from({ length: SLIDE_OF_SLIDER }).map((_, i) => (
              <SkeletonBannerSlide key={i} />
            ))
          : BANNER_DATA.map((banner) => (
              <Slide slide={banner} key={banner.id} />
            ))}
      </Slider>
    </div>
  );
};

export default Banner;
