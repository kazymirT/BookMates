import { useTranslation } from 'react-i18next';

import { category } from './data';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Category = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/collections"
          btnText={t('home.book-collections.button')}
          title={t('home.book-collections.title')}
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
