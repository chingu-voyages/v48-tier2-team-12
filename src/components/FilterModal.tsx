import styles from '../css-modules/FilterModal.module.css';
import FilterDinoType from './FilterDinoType';
import FilterDinoLength from './FilterDinoLength';
import FilterDinoWeight from './FilterDinoWeight';
import FilterDinoDiet from './FilterDinoDiet';
import FilterClose from './FilterClose';
import FilterDinoEra from './FilterDinoEra';
import FilterDinoButtons from './FilterDinoButtons';

const FilterModal = () => {
  return (
    <div className={`${styles['filter-modal']}`}>
      <FilterClose />
      <FilterDinoType />
      <FilterDinoLength />
      <FilterDinoWeight />
      <FilterDinoDiet />
      <FilterDinoEra />
      <FilterDinoButtons />
    </div>
  );
};
export default FilterModal;
