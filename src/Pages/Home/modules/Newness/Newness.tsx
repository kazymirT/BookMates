import { useTranslation } from 'react-i18next';

import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { useGetBooksQuery } from '@/redux/services/books';

const Newness = () => {
  const { t } = useTranslation();
  const { data: books } = useGetBooksQuery({
    size: '9',
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
          {books && (
            <ProductSlider sliderCL="slider-section" isArrow>
              {books &&
                books.content.map((item) => (
                  <ProductCard key={item.id} data={item} variant="slider" />
                ))}
            </ProductSlider>
          )}
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
