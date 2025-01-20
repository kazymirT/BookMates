import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import HitCard from './components/HitCard/HitCard';
import { PRODUCT_OF_SLIDER } from './constants';
import styles from './HitOffers.module.scss';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductSlideCard from '@/components/Skeleton/SkeletonProductSlideCard';
import Slider from '@/components/Slider/Slider';
import { useGetBooksQuery } from '@/redux/services/books';

const HitOffers = () => {
  const { t } = useTranslation();
  const { data: books, isLoading } = useGetBooksQuery({
    size: `${PRODUCT_OF_SLIDER}`,
  });
  const hitCN = classNames(styles.hit, {
    [styles['hit__skeleton']]: isLoading,
  });
  return (
    <section className={hitCN}>
      <SectionTitle title={t('catalog.hot-offers')} isIcon variant="catalog" />
      <Slider
        sliderCL="slider-hit"
        variant="hit"
        slidesToScroll={2}
        slidesToShow={3}
        dots
      >
        {books &&
          books.content.map((item) => <HitCard key={item.id} data={item} />)}
        {isLoading &&
          Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
            <SkeletonProductSlideCard key={i} />
          ))}
      </Slider>
    </section>
  );
};

export default HitOffers;
