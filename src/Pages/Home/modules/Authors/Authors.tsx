import { useTranslation } from 'react-i18next';

import { authors } from './data';
import AuthorsCard from '../../components/AuthorsCard/AuthorsCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const Authors = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <>
        <SectionTitle
          btnLink="/authors"
          btnText={t('home.authors.button')}
          title={t('home.authors.title')}
        />
        <SectionContent variant="authors">
          {authors &&
            authors.map(({ id, img, title }) => (
              <AuthorsCard id={id} img={img} title={title} key={id} />
            ))}
        </SectionContent>
      </>
    </Section>
  );
};

export default Authors;
