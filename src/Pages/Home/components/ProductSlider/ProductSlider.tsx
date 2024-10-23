import { type FC } from 'react';
import Slider from 'react-slick';

import './ProductSlider.scss';
import { ProductSliderProps } from './types';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { SliderButtonSlick } from '../SliderButtonSlick/SliderButtonSlick';

const ProductSlider: FC<ProductSliderProps> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    variableWidth: true,
    prevArrow: <SliderButtonSlick arrow="prev" variant="section" />,
    nextArrow: <SliderButtonSlick arrow="next" variant="section" />,
    className: 'slider-section',
  };
  return (
    <div className={'product-slider'}>
      <div className={'slider'}>
        <Slider {...settings}>
          {data &&
            data.content.map((banner) => (
              <div key={banner.id} className="slide-wrapper">
                <ProductCard data={banner} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
