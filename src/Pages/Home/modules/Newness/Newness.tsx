import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RESPONSE_SLIDER } from './constants';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import { MainBooksProps } from '../Sale/types';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import Slider from '@/components/Slider/Slider';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
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
          <Slider
            sliderCL="slider-section"
            arrows={true}
            responsive={RESPONSE_SLIDER}
          >
            {books
              ? books.map((item) => (
                  <ProductCard key={item.id} data={item} variant="slider" />
                ))
              : Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
                  <SkeletonProductCard key={i} variant="slider" />
                ))}
          </Slider>
          <ButtonLink
            type="button"
            size={Sizes.Section}
            text={t('home.new-arrivals.button')}
            url="/catalog?sort=id-desc"
            variant={Variant.Primary}
          />
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
