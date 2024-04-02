import { useContext } from 'react';
import styles from '../../css-modules/FilterContent.module.css';
import { FilterContext } from './FilterContext';
import { filterDinoDiet } from '../../utils/categories';

const FilterDinoDiet = () => {
  const { diet, handleDinoDiet } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Diet</span>
      <div className={styles['chips-container']}>
        {filterDinoDiet.map(({ title, icon, cardData }) => {
          const isActive = diet === cardData;
          return (
            <div
              key={title}
              className={`${styles['single-chip']} ${
                isActive ? styles['single-chip-active'] : ''
              }`}
              onClick={() => handleDinoDiet(cardData)}
            >
              {icon(isActive, styles)}
              <span className={styles['type-text']}>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterDinoDiet;
