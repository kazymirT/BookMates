import classNames from 'classnames';
import { useState } from 'react';
import ReactSlider from 'react-slider';

import 'nouislider/distribute/nouislider.css';
import { FilterProps } from '../../Catalog.types';
import styles from '../Filter/Filter.module.scss';
import arrow from '@/assets/icons/ArrowDown.svg';
import useToggleOpen from '@/hooks/handleToggleOpen';
import { useAppDispatch } from '@/redux/hooks';
import { setPrice } from '@/redux/slices/queryParams';

const PriceFilter = ({ title, price }: FilterProps) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleToggleOpen, listRef } = useToggleOpen<HTMLDivElement>();
  const [value, setValue] = useState<number[]>([
    price ? price.min : 0,
    price ? price.max : 999,
  ]);
  const [isError, setIsError] = useState(false);

  const handlerLowerBound = (lower: React.ChangeEvent<HTMLInputElement>) => {
    const lowerValue = Number(lower.target.value);
    lowerValue >= value[1] ? setIsError(true) : setIsError(false);
    setValue([lowerValue, value[1]]);
  };

  const handlerUpperBound = (upper: React.ChangeEvent<HTMLInputElement>) => {
    const upperValue = Number(upper.target.value);
    value[0] >= upperValue ? setIsError(true) : setIsError(false);
    setValue([value[0], upperValue]);
  };

  const arrowClassNames = classNames(styles.arrow, {
    [styles['arrow_open']]: !isOpen,
  });
  const controlClassNames = classNames(styles.control, {
    [styles.open]: isOpen,
  });
  const inputClassNames = classNames(styles.input, {
    [styles['input__error']]: isError,
  });
  const onSubmit = () => {
    dispatch(setPrice(value));
  };
  return (
    <div className={styles.filter}>
      <div className={styles.box} onClick={handleToggleOpen}>
        <h3>{title}</h3>
        <img src={arrow} className={arrowClassNames} alt="arrow icon" />
      </div>
      <div className={controlClassNames} ref={listRef}>
        <ReactSlider
          value={value[1] > value[0] ? value : undefined}
          max={700}
          min={0}
          minDistance={1}
          onChange={(value) => {
            setValue(value);
            setIsError(false);
          }}
          className={styles['range-slider']}
          thumbClassName={styles['range-slider__thumb']}
        />
        <div className={styles['price-control']} onSubmit={onSubmit}>
          <div className={styles.inputs}>
            <input
              className={inputClassNames}
              type="text"
              value={value[0]}
              onChange={handlerLowerBound}
            />
            <span></span>
            <input
              className={inputClassNames}
              type="text"
              value={value[1]}
              onChange={handlerUpperBound}
            />
          </div>
          <button type="button" onClick={onSubmit} disabled={isError}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
export default PriceFilter;
