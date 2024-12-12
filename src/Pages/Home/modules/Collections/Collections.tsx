import { useTranslation } from 'react-i18next';

import { collections } from './data';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Collections = () => {
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
          {collections &&
            collections.map(({ id, img, title }) => (
              <CategoryCard id={id} img={img} title={title} key={id} />
            ))}
        </SectionContent>
      </>
    </Section>
  );
};

export default Collections;
