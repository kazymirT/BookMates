import { RadioButton } from '@ui_components/RadioButton/RadioButton';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { radioButtons } from './constants';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.id;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles['radioGroup']}>
      {radioButtons.map(({ id, label, name, lang }) => (
        <RadioButton
          key={id}
          id={id}
          value={label}
          name={name}
          label={label}
          checked={i18next.language === id || i18next.language === lang}
          onChange={handleOnChange}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;
