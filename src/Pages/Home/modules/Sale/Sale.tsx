import { useTranslation } from 'react-i18next';

import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { useGetBooksQuery } from '@/redux/services/books';

const Sale = () => {
  const { t } = useTranslation();
  const { data: books } = useGetBooksQuery({
    size: '9',
  });

  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/catalog"
          btnText={t('home.sale.button')}
          title={t('home.sale.title')}
          isIcon
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

export default Sale;
