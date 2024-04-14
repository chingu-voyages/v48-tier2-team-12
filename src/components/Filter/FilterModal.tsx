import styles from '../../css-modules/FilterModal.module.css';
import FilterDinoType from './FilterDinoType';
import FilterDinoLength from './FilterDinoLength';
import FilterDinoWeight from './FilterDinoWeight';
import FilterDinoDiet from './FilterDinoDiet';
import FilterClose from './FilterClose';
import FilterDinoEra from './FilterDinoEra';
import FilterDinoButtons from './FilterDinoButtons';
import FilterDinoCountry from './FilterDinoCountry';
import FilterImage from './FilterImage';

import { useContext } from 'react';
import { FilterContext } from './FilterContext';

const FilterModal = () => {
  const { handleModal } = useContext(FilterContext);

  return (
    <div className={styles.overlay} onClick={handleModal}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${styles['filter-modal']} filterModal`}
      >
        <FilterClose />
        <FilterDinoType />
        <FilterDinoLength />
        <FilterDinoWeight />
        <FilterDinoDiet />
        <FilterDinoEra />
        <FilterDinoCountry />
        <FilterImage />
        <FilterDinoButtons />
      </div>
    </div>
  );
};
export default FilterModal;
