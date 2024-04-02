import styles from '../../css-modules/FilterContent.module.css';

const FilterDinoWeight = () => {
  return (
    <div className={`${styles['filter-content']}`}>
      <span className={styles['filter-small-title']}>Weight</span>
      <input type="range" id="weight" name="weight" min="0" max={100} />
    </div>
  );
};
export default FilterDinoWeight;
