import { useTranslation } from 'react-i18next';

import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Slider from '@/components/Slider/Slider';
import { useGetBooksQuery } from '@/redux/services/books';

const Sale = () => {
  const { t } = useTranslation();
  const { data: books } = useGetBooksQuery({
    size: '9',
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
        {books && (
          <Slider sliderCL="slider-section" arrows>
            {books &&
              books.content.map((item) => (
                <ProductCard key={item.id} data={item} variant="slider" />
              ))}
          </Slider>
        )}
      </SectionContent>
    </Section>
  );
};

export default Sale;
