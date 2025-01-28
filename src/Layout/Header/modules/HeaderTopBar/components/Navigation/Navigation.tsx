import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { NAVIGATION_LINKS } from './constants';
import styles from './Navigation.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onSupport = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));

  return (
    <nav className={styles.navigation}>
      <ul>
        {NAVIGATION_LINKS &&
          NAVIGATION_LINKS.map(({ href, id, name }) => (
            <li key={id}>
              <NavLink to={href}>{t(`header.links.${name}`)}</NavLink>
            </li>
          ))}
      </ul>
      <Button
        variant={Variant.Link}
        size={Sizes.Link}
        type="button"
        text={t('header.links.support')}
        onClick={onSupport}
      />
    </nav>
  );
};

export default Navigation;
