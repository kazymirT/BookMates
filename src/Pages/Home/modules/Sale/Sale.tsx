import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useGetBooksQuery } from '@/redux/services/books';

const Sale = () => {
  const { data: books } = useGetBooksQuery({
    size: '9',
  });
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/catalog"
          btnText="Більше книжок"
          title="Розпродаж"
          isIcon
        />
        <SectionContent variant="product">
          {books && <ProductSlider data={books} slidesPerGroup={3} />}
        </SectionContent>
      </>
    </Section>
  );
};

export default Sale;
