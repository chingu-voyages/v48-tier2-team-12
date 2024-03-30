import { useContext } from 'react';
import styles from '../css-modules/FilterContent.module.css';
import { FilterContext } from './FilterContext';
import { filterDinoDiet } from '../utils/categories';

const FilterDinoDiet = () => {
  const { handleDinoDiet } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Type of Dinosaur</span>
      <div className={styles['chips-container']}>
        {filterDinoDiet.map(({ title, icon, cardData }) => {
          return (
            <div
              key={title}
              className={styles['single-chip']}
              onClick={() => handleDinoDiet(cardData)}
            >
              <img src={icon} alt={title} />
              <span className={styles['type-text']}>{title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FilterDinoDiet;
