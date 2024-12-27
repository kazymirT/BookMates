import { FC, useState } from 'react';

import styles from './Change.module.scss';
import RadioForm from '@/components/ui-components/RadioForm/RadioForm';
export interface ChangeProps {
  title: string;
  options: string[];
  defaultValue: string;
}

const Change: FC<ChangeProps> = ({ title, options, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const setNewValue = (newValue: string) => setValue(newValue);
  return (
    <div className={styles.change}>
      <h3>{title}</h3>
      <RadioForm
        onChange={setNewValue}
        options={options}
        value={value}
        variant="user"
      />
    </div>
  );
};

export default Change;
