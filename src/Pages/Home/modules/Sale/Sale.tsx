import { useTranslation } from 'react-i18next';

import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import Slider from '@/components/Slider/Slider';
import { PRODUCT_OF_SLIDER } from '@/constants/slider';
import { useGetBooksQuery } from '@/redux/services/books';

const Sale = () => {
  const { t } = useTranslation();
  const { data: books, isLoading } = useGetBooksQuery({
    size: `${PRODUCT_OF_SLIDER}`,
  });

  return (
    <Section>
      <SectionTitle
        btnLink="/catalog"
        btnText={t('home.sale.button')}
        title={t('home.sale.title')}
        isIcon
      />
      <SectionContent variant="product">
        <Slider sliderCL="slider-section" arrows>
          {books &&
            books.content.map((item) => (
              <ProductCard key={item.id} data={item} variant="slider" />
            ))}
          {isLoading &&
            Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
              <SkeletonProductCard key={i} variant="slider" />
            ))}
        </Slider>
      </SectionContent>
    </Section>
  );
};

export default Sale;
