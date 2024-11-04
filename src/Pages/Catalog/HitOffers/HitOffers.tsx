import styles from './HitOffers.module.scss';
import HitCard from '../HitCard/HitCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ProductSlider from '@/Pages/Home/components/ProductSlider/ProductSlider';
import { useGetBooksQuery } from '@/redux/services/books';

const HitOffers = () => {
  const { data: books } = useGetBooksQuery({ size: '6' });

  return (
    <section className={styles.hit}>
      <SectionTitle title="Гарячі пропозиції" isIcon variant="catalog" />
      <div>
        {books && (
          <ProductSlider
            sliderCL="slider-hit"
            variant="hit"
            slidesToScroll={2}
            slidesToShow={3}
            isDots
          >
            {books &&
              books.content.map((item) => (
                <HitCard key={item.id} data={item} />
              ))}
          </ProductSlider>
        )}
      </div>
    </section>
  );
};

export default HitOffers;
