import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useGetBooksQuery } from '@/redux/services/books';

const Newness = () => {
  const { data: books } = useGetBooksQuery({
    size: '8',
  });
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/catalog"
          btnText="Усі новинки"
          title="Новинки"
        />
        <SectionContent variant="product">
          {books && <ProductSlider data={books} />}
        </SectionContent>
      </>
    </Section>
  );
};

export default Newness;
