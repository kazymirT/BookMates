import { type FC } from 'react';
import Slider from 'react-slick';

import './ProductSlider.scss';
import { ProductSliderProps } from './types';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { SliderButtonSlick } from '../SliderButtonSlick/SliderButtonSlick';

const ProductSlider: FC<ProductSliderProps> = ({
  data,
  sliderCL,
  variant = 'section',
  slidesToScroll = 3,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll,
    variableWidth: true,
    prevArrow: <SliderButtonSlick arrow="prev" variant={variant} />,
    nextArrow: <SliderButtonSlick arrow="next" variant={variant} />,
    className: sliderCL,
  };
  return (
    <div className={`product-slider product-slider__${variant}`}>
      <div className={'slider'}>
        <Slider {...settings}>
          {data &&
            data.content.map((item) => (
              <div key={item.id} className="slide-wrapper">
                <ProductCard data={item} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
