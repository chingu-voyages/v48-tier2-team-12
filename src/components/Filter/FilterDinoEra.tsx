import styles from '../../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';
import { filterDinoEra } from '../../utils/categories';

const FilterDinoEra = () => {
  const { whenLived, handleWhenLived } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Era</span>
      <div className={styles['chips-container']}>
        {filterDinoEra.map((title) => {
          const isActive = whenLived === title;
          return (
            <div
              key={title}
              className={`${styles['single-chip']} ${
                isActive ? styles['single-chip-active'] : ''
              }`}
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
