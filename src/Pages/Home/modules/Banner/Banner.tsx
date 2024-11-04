import Slider from 'react-slick';

import './Banner.scss';
import { BANNER_DATA } from './data';
import Slide from './Slide/Slide';
import { SliderButtonSlick } from '../../components/SliderButtonSlick/SliderButtonSlick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 6000,
    autoplay: true,
    pauseOnDotsHover: true,
    variableWidth: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderButtonSlick arrow="next" variant="banner" />,
    prevArrow: <SliderButtonSlick arrow="prev" variant="banner" />,
    className: 'banner',
  };
  return (
    <div className="banner-container">
      <div className="wrapper">
        <Slider {...settings}>
          {BANNER_DATA &&
            BANNER_DATA.map((banner) => (
              <Slide key={banner.id} slide={banner} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
