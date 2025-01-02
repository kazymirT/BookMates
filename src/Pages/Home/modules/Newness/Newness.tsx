import { useTranslation } from 'react-i18next';

import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import ProductCard from '@/components/ProductCard/ProductCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Slider from '@/components/Slider/Slider';
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
            <Slider sliderCL="slider-section" arrows>
              {books &&
                books.content.map((item) => (
                  <ProductCard key={item.id} data={item} variant="slider" />
                ))}
            </Slider>
          )}
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
