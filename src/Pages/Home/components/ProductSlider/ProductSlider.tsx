import { type FC } from 'react';
import Slider from 'react-slick';

import './ProductSlider.scss';
import { ProductSliderProps } from './types';
import { SliderButtonSlick } from '../SliderButtonSlick/SliderButtonSlick';

const ProductSlider: FC<ProductSliderProps> = ({
  sliderCL,
  variant = 'section',
  slidesToScroll = 3,
  slidesToShow = 4,
  children,
  isArrow = false,
  isDots = false,
}) => {
  const settings = {
    dots: isDots,
    arrows: isArrow,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow,
    slidesToScroll,
    variableWidth: true,
    prevArrow: <SliderButtonSlick arrow="prev" variant={variant} />,
    nextArrow: <SliderButtonSlick arrow="next" variant={variant} />,
    dotsClass: 'slick-dots',
    className: sliderCL,
  };
  return (
    <div className={`product-slider product-slider__${variant}`}>
      <div className={`slider`}>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
