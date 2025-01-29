import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NAVIGATION_LINKS } from './data';
import styles from './NavigationLinks.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const NavigationLinks = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleOnSupport = () =>
    dispatch(toggleModal({ openedModalType: 'feedback' }));

  return (
    <ul className={styles.links}>
      {NAVIGATION_LINKS.map(({ href, id, name }) => (
        <li key={id}>
          <Link to={href}>{t(name)}</Link>
        </li>
      ))}
      <li>
        <button onClick={handleOnSupport}>{t('footer.links.support')}</button>
      </li>
    </ul>
  );
};

export default NavigationLinks;
