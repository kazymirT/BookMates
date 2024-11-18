import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

import styles from './PriceFilter.module.scss';
import { type PriceFilterProps } from '../../Catalog.types';
import DropDown from '@/components/ui-components/Dropdown/DropDown';
import { useAppDispatch } from '@/redux/hooks';
import { setPrice } from '@/redux/slices/queryParams';

const PriceFilter = ({ title, price }: PriceFilterProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number[]>(price);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setValue([Number(price[0]), Number(price[1])]);
  }, [price]);

  const handlerLowerBound = (lower: React.ChangeEvent<HTMLInputElement>) => {
    const lowerValue = Number(lower.target.value);
    lowerValue > value[1] ? setIsError(true) : setIsError(false);
    setValue([lowerValue, value[1]]);
  };

  const handlerUpperBound = (upper: React.ChangeEvent<HTMLInputElement>) => {
    const upperValue = Number(upper.target.value);
    value[0] > upperValue ? setIsError(true) : setIsError(false);
    setValue([value[0], upperValue]);
  };

  const onSubmit = () => {
    dispatch(setPrice([String(value[0]), String(value[1])]));
  };
  const controlClassNames = classNames(styles.control, {
    [styles.open]: true,
  });
  const inputClassNames = classNames(styles.input, {
    [styles['input__error']]: isError,
  });
  return (
    <div className={styles.filter}>
      <DropDown
        tagName="BUTTON"
        variant="filter"
        control={<h3 className={styles.title}>{title}</h3>}
        options={
          <div className={controlClassNames}>
            <ReactSlider
              value={value[1] >= value[0] ? value : undefined}
              max={10000}
              min={0}
              minDistance={0}
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
        }
      />
    </div>
  );
};
export default PriceFilter;
