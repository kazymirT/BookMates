import styles from './HitOffers.module.scss';
import HitCard from '../HitCard/HitCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductSlideCard from '@/components/Skeleton/SkeletonProductSlideCard';
import Slider from '@/components/Slider/Slider';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { isLoading } from '@/redux/slices/skeletonSlice';

const PRODUCT_OF_SLIDER = 6;

const HitOffers = () => {
  const { data: books } = useGetBooksQuery({ size: `${PRODUCT_OF_SLIDER}` });
  const isSkeleton = useAppSelector(isLoading);
  return (
    <section className={styles.hit}>
      <SectionTitle title="Гарячі пропозиції" isIcon variant="catalog" />
      <div>
        <Slider
          sliderCL="slider-hit"
          variant="hit"
          slidesToScroll={2}
          slidesToShow={3}
          dots
        >
          {!isSkeleton &&
            books &&
            books.content.map((item) => <HitCard key={item.id} data={item} />)}
          {isSkeleton &&
            Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
              <SkeletonProductSlideCard key={i} />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default HitOffers;
