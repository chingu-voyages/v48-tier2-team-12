import styles from '../css-modules/FilterModal.module.css';
import {
  filterDinoDiet,
  filterDinoEra,
  filterDinoType,
} from '../utils/categories';

const FilterModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`${styles['filter-modal']}`}>
      <div className={`${styles['filter-content']} ${styles['filter-close']}`}>
        <svg
          onClick={() => {
            setIsModalOpen((prev) => !prev);
          }}
          className={styles['filter-close-icon']}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00003 8.9333L4.73337 12.2C4.61114 12.3222 4.45559 12.3833 4.2667 12.3833C4.07781 12.3833 3.92225 12.3222 3.80003 12.2C3.67781 12.0777 3.6167 11.9222 3.6167 11.7333C3.6167 11.5444 3.67781 11.3889 3.80003 11.2666L7.0667 7.99997L3.80003 4.7333C3.67781 4.61108 3.6167 4.45553 3.6167 4.26664C3.6167 4.07775 3.67781 3.92219 3.80003 3.79997C3.92225 3.67775 4.07781 3.61664 4.2667 3.61664C4.45559 3.61664 4.61114 3.67775 4.73337 3.79997L8.00003 7.06664L11.2667 3.79997C11.3889 3.67775 11.5445 3.61664 11.7334 3.61664C11.9223 3.61664 12.0778 3.67775 12.2 3.79997C12.3223 3.92219 12.3834 4.07775 12.3834 4.26664C12.3834 4.45553 12.3223 4.61108 12.2 4.7333L8.93337 7.99997L12.2 11.2666C12.3223 11.3889 12.3834 11.5444 12.3834 11.7333C12.3834 11.9222 12.3223 12.0777 12.2 12.2C12.0778 12.3222 11.9223 12.3833 11.7334 12.3833C11.5445 12.3833 11.3889 12.3222 11.2667 12.2L8.00003 8.9333Z"
            fill="black"
          />
        </svg>
        <span className={styles['filter-small-title']}>Filter</span>
      </div>

      <div className={`${styles['filter-content']} ${styles['cards']}`}>
        <span className={styles['filter-small-title']}>Type of Dinosaur</span>
        <div className={styles['chips-container']}>
          {filterDinoType.map(({ title, icon }) => {
            return (
              <div key={title} className={styles['single-chip']}>
                <img src={icon} alt={title} />
                <span className={styles['type-text']}>{title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles['filter-content']}`}>
        <span className={styles['filter-small-title']}>Length</span>
        <input type="range" id="length" name="length" min="0" max="100" />
      </div>

      <div className={`${styles['filter-content']} ${styles['slider']}`}>
        <span className={styles['filter-small-title']}>Weight</span>
        <input type="range" id="weight" name="weight" min="0" max="100" />
      </div>

      <div className={`${styles['filter-content']} ${styles['cards']}`}>
        <span className={styles['filter-small-title']}>Diet</span>
        <div className={styles['chips-container']}>
          {filterDinoDiet.map(({ title, icon }) => {
            return (
              <div key={title} className={styles['single-chip']}>
                <img src={icon} alt={title} />
                <span className={styles['type-text']}>{title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles['filter-content']} ${styles['cards']}`}>
        <span className={styles['filter-small-title']}>Era</span>
        <div className={styles['chips-container']}>
          {filterDinoEra.map((title) => {
            return (
              <div key={title} className={styles['single-chip']}>
                <span className={styles['bold-text']}>{title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${styles['filter-buttons']}`}>
        <button>Clear</button>
        <button>Show Results</button>
      </div>
    </div>
  );
};
export default FilterModal;
