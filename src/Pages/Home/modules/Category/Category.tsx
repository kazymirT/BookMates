import { category } from './data';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/catalog"
          btnText="Більше колекцій"
          title="Книжкові колекції"
        />
        <SectionContent variant="category">
          {category &&
            category.map(({ id, img, title }) => (
              <CategoryCard id={id} img={img} title={title} key={id} />
            ))}
        </SectionContent>
      </>
    </Section>
  );
};

export default Category;
