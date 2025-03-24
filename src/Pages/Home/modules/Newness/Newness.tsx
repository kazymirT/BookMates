import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import { MainBooksProps } from '../Sale/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import Slider from '@/components/Slider/Slider';
import { PRODUCT_OF_SLIDER } from '@/constants/slider';

const Newness: FC<MainBooksProps> = ({ books }) => {
  const { t } = useTranslation();

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
            {books
              ? books.map((item) => (
                  <ProductCard key={item.id} data={item} variant="slider" />
                ))
              : Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
                  <SkeletonProductCard key={i} variant="slider" />
                ))}
          </Slider>
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
