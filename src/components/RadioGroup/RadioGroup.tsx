import i18next from 'i18next';

import { radioButtons } from './constants';
import { RadioButton } from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';

export const RadioGroup = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    i18next.changeLanguage(e.target.id);
  };

  return (
    <div className={styles['radioGroup']}>
      {radioButtons.map(({ id, label, name }) => (
        <RadioButton
          key={id}
          id={id}
          value={label}
          name={name}
          label={label}
          checked={i18next.language === id}
          onChange={handleOnChange}
        />
      ))}
    </div>
  );
};
