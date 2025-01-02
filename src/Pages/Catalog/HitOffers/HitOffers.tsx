import styles from './HitOffers.module.scss';
import HitCard from '../HitCard/HitCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Slider from '@/components/Slider/Slider';
import { useGetBooksQuery } from '@/redux/services/books';

const HitOffers = () => {
  const { data: books } = useGetBooksQuery({ size: '6' });

  return (
    <section className={styles.hit}>
      <SectionTitle title="Гарячі пропозиції" isIcon variant="catalog" />
      <div>
        {books && (
          <Slider
            sliderCL="slider-hit"
            variant="hit"
            slidesToScroll={2}
            slidesToShow={3}
            dots
          >
            {books &&
              books.content.map((item) => (
                <HitCard key={item.id} data={item} />
              ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default HitOffers;
