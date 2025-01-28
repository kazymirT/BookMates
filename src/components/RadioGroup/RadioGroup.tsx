import { RadioButton } from '@ui_components/RadioButton/RadioButton';
import RadioForm from '@ui_components/RadioForm/RadioForm';
import i18next from 'i18next';
import { FC, useState, useEffect } from 'react';

import { radioButtons } from './constants';
import styles from './RadioGroup.module.scss';
import { Lang } from '@/i18n/constants';
export interface RadioGroupProps {
  title?: string;
  variant?: 'title' | 'radio';
}

export const RadioGroup: FC<RadioGroupProps> = ({
  title,
  variant = 'title',
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => setCurrentLanguage(lng);

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = e.target.id;
    i18next.changeLanguage(newLanguage);
  };

  const handleOnChangeRadio = (newLanguage: string) => {
    const langCode =
      newLanguage === 'English' ? Lang.EnglishEn : Lang.UkraineUk;
    i18next.changeLanguage(langCode);
  };

  return (
    <div className={styles['radioGroup']}>
      {title && <h3>{title}</h3>}
      <div className={styles.options}>
        {variant === 'title' ? (
          <>
            {radioButtons.map(({ id, label, name, lang }) => (
              <RadioButton
                key={id}
                id={id}
                value={label}
                name={name}
                label={label}
                checked={currentLanguage === id || currentLanguage === lang}
                onChange={handleOnChange}
              />
            ))}
          </>
        ) : (
          <RadioForm
            onChange={handleOnChangeRadio}
            options={['Українська', 'English']}
            value={
              currentLanguage === Lang.UkraineUk ? 'Українська' : 'English'
            }
            variant="user"
          />
        )}
      </div>
    </div>
  );
};
