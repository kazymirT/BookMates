import { useTranslation } from 'react-i18next';

import { RESPONSE_SLIDER } from './constants';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import Slider from '@/components/Slider/Slider';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { PRODUCT_OF_SLIDER } from '@/constants/slider';
import { useGetBooksQuery } from '@/redux/services/books';

const Newness = () => {
  const { t } = useTranslation();
  const { data: books, isLoading } = useGetBooksQuery({
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
          <Slider
            sliderCL="slider-section"
            arrows={true}
            responsive={RESPONSE_SLIDER}
          >
            {books &&
              books.content.map((item) => (
                <ProductCard key={item.id} data={item} variant="slider" />
              ))}
            {isLoading &&
              Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
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
