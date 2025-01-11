import { useTranslation } from 'react-i18next';

import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import Slider from '@/components/Slider/Slider';
import { PRODUCT_OF_SLIDER } from '@/constants/slider';
import { useAppSelector } from '@/redux/hooks';
import { useGetBooksQuery } from '@/redux/services/books';
import { isLoading } from '@/redux/slices/skeletonSlice';

const Newness = () => {
  const { t } = useTranslation();
  const isSkeleton = useAppSelector(isLoading);
  const { data: books } = useGetBooksQuery({
    size: `${PRODUCT_OF_SLIDER}`,
    sort: ['id,desc'],
  });
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/catalog?sort=id-desc"
          btnText={t('home.new-arrivals.button')}
          title={t('home.new-arrivals.title')}
        />
        <SectionContent variant="product">
          <Slider sliderCL="slider-section" arrows>
            {books &&
              !isSkeleton &&
              books.content.map((item) => (
                <ProductCard key={item.id} data={item} variant="slider" />
              ))}
            {isSkeleton &&
              Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
                <SkeletonProductCard key={i} variant="slider" />
              ))}
          </Slider>
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
