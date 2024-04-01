import styles from '../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { filterDinoType } from '../utils/categories';
import { FilterContext } from './FilterContext';

const FilterDinoType = () => {
  const { handleTypeOfDinosaur } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']} ${styles['cards']}`}>
      <span className={styles['filter-small-title']}>Type of Dinosaur</span>
      <div className={styles['chips-container']}>
        {filterDinoType.map(({ title, icon, cardData }) => {
          return (
            <div
              key={title}
              className={styles['single-chip']}
              onClick={() => handleTypeOfDinosaur(cardData)}
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
export default FilterDinoType;
