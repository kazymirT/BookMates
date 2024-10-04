import { authors } from './data';
import AuthorsCard from '../../components/AuthorsCard/AuthorsCard';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Authors = () => {
  return (
    <Section>
      <>
        <SectionTitle btnLink="/authors" btnText="Всі автори" title="Автори" />
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
