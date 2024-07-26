import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import ReactSlider from 'react-slider';

import 'nouislider/distribute/nouislider.css';
import { FilterProps } from '../../Catalog.types';
import styles from '../Filter/Filter.module.scss';
import arrow from '@/assets/icons/ArrowDown.svg';

const PriceFilter = ({
  title,
  // onFilterChange,
  price,
}: FilterProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number[]>([
    price ? price.min : 0,
    price ? price.max : 999,
  ]);

  useEffect(() => {
    const ulElement = listRef.current;
    if (ulElement) {
      if (isOpen) {
        ulElement.style.height = `${ulElement.scrollHeight}px`;
        ulElement.addEventListener(
          'transitionend',
          () => {
            ulElement.style.height = 'auto';
          },
          { once: true }
        );
      } else {
        ulElement.style.height = `${ulElement.scrollHeight}px`;
        requestAnimationFrame(() => {
          ulElement.style.height = '0';
        });
      }
    }
  }, [isOpen]);

  const handleToggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handlerLowerBound = (lower: React.ChangeEvent<HTMLInputElement>) => {
    const lowerValue = Number(lower.target.value);
    // if (lowerValue > value[1]) {
    //   setValue([value[1], value[1]]);
    // } else {
    // }
    setValue([lowerValue, value[1]]);
  };

  const handlerUpperBound = (upper: React.ChangeEvent<HTMLInputElement>) => {
    const upperValue = Number(upper.target.value);
    // if (upperValue <= value[0]) {
    //   setValue([value[0], value[0]]);
    // } else {
    // }
    setValue([value[0], upperValue]);
  };

  const arrowClassNames = classNames(styles.arrow, {
    [styles['arrow_open']]: !isOpen,
  });
  const controlClassNames = classNames(styles.control, {
    [styles.open]: isOpen,
  });
  const onSubmit = () => {
    console.log(value);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.box} onClick={handleToggleOpen}>
        <h3>{title}</h3>
        <img src={arrow} className={arrowClassNames} alt="arrow icon" />
      </div>
      <div className={controlClassNames}>
        <ReactSlider
          value={value}
          max={1000}
          min={0}
          minDistance={1}
          onChange={(value) => {
            setValue(value);
          }}
          className={styles['range-slider']}
          thumbClassName={styles['range-slider__thumb']}
          // trackClassName={styles.track}
        />
        <div className={styles['price-control']} onSubmit={onSubmit}>
          <div className={styles.inputs}>
            <input
              className={styles.input}
              type="text"
              value={value[0]}
              onChange={handlerLowerBound}
            />
            <span></span>
            <input
              className={styles.input}
              type="text"
              value={value[1]}
              onChange={handlerUpperBound}
            />
          </div>
          <button type="button" onClick={onSubmit}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
export default PriceFilter;
