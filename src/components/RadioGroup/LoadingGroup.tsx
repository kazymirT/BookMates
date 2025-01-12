import { loadingButtons } from './constants';
import { RadioButton } from './RadioButton/RadioButton';
import styles from './RadioGroup.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { isLoading, toggleLoading } from '@/redux/slices/skeletonSlice';

export const LoadingGroup = () => {
  const isActive = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleLoading(e.target.value === 'on' ? true : false));
  };

  return (
    <div className={styles['radioGroup']}>
      <div className={styles.options}>
        {loadingButtons.map(({ id, label, name, checked }) => (
          <RadioButton
            key={id}
            id={id}
            value={label}
            name={name}
            label={label}
            checked={isActive === checked}
            onChange={handleOnChange}
          />
        ))}
      </div>
    </div>
  );
};
