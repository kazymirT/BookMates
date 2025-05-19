import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import AuthorsCard from './components/AuthorsCard/AuthorsCard';
import { CARD_OF_AUTHORS } from './constants';
import { type AuthorsProps } from './types';
import Section from '../../components/Section/Section';
import SectionContent from '../../components/SectionContent/SectionContent';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SkeletonAuthorCard from '@/components/Skeleton/SkeletonAuthorCard';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';

const Authors: FC<AuthorsProps> = ({ authors }) => {
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
          <div>
            {authors ? (
              authors.map(({ id, image, name }) => (
                <AuthorsCard id={id} img={image} title={name} key={id} />
              ))
            ) : (
              <SkeletonAuthorCard cards={CARD_OF_AUTHORS} />
            )}
          </div>
          <ButtonLink
            type="button"
            size={Sizes.Section}
            text={t('home.authors.button')}
            url="/authors"
            variant={Variant.Primary}
          />
        </SectionContent>
      </>
    </Section>
  );
};

export default Authors;
