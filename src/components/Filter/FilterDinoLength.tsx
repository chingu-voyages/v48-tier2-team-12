import styles from '../../css-modules/FilterContent.module.css';

const FilterDinoLength = () => {
  return (
    <div className={`${styles['filter-content']}`}>
      <span className={styles['filter-small-title']}>Length</span>
      <input type="range" id="length" name="length" min="0" max={100} />
    </div>
  );
};
export default FilterDinoLength;
