import i18next from 'i18next';

import { radioButtons } from './constants';
import { RadioButton } from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';

export const RadioGroup = () => {
  console.log(i18next.language);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18next.changeLanguage(e.target.id);
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
