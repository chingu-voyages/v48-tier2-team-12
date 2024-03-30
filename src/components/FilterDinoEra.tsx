import styles from '../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';
import { filterDinoEra } from '../utils/categories';

const FilterDinoEra = () => {
  const { handleWhenLived } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Era</span>
      <div className={styles['chips-container']}>
        {filterDinoEra.map((title) => {
          return (
            <div
              key={title}
              className={styles['single-chip']}
              onClick={() => handleWhenLived(title)}
            >
              <span className={styles['bold-text']}>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterDinoEra;
