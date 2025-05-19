import { type FC } from 'react';
import { default as SliderComponent, type Settings } from 'react-slick';

import './Slider.scss';
import { SliderProps } from './types';
import { SliderButton } from '../SliderButton/SliderButton';

const Slider: FC<SliderProps> = ({
  sliderCL,
  variant = 'section',
  slidesToScroll = 3,
  slidesToShow = 4,
  initialSlide = 0,
  children,
  arrows = false,
  dots = false,
  ...rest
}) => {
  const settings: Settings = {
    ...rest,
    dots,
    arrows,
    infinite: true,
    speed: 1500,
    autoplaySpeed: variant === 'banner' ? 6000 : 4000,
    autoplay: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    initialSlide,
    slidesToShow,
    slidesToScroll,
    variableWidth: true,
    prevArrow: <SliderButton arrow="prev" variant={variant} />,
    nextArrow: <SliderButton arrow="next" variant={variant} />,
    dotsClass: 'slick-dots',
    className: sliderCL,
  };
  return (
    <div className={`product-slider product-slider__${variant}`}>
      <div className={`slider`}>
        <SliderComponent {...settings}>{children}</SliderComponent>
      </div>
    </div>
  );
};

export default Slider;
