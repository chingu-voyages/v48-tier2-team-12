import styles from '../../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';
import { filterDinoCountry } from '../../utils/categories';

const FilterDinoCountry = () => {
  const { country, handleCountry } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Country</span>
      <div className={styles['chips-container']}>
        {filterDinoCountry.map((title) => {
          const isActive = country === title;
          return (
            <div
              key={title}
              className={`${styles['single-chip-small']} ${
                isActive ? styles['single-chip-active'] : ''
              }`}
              onClick={() => handleCountry(title)}
            >
              <span className={styles['bold-text']}>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterDinoCountry;
