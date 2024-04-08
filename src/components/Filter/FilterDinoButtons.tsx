import { useNavigate } from 'react-router-dom';
import styles from '../../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';

const FilterDinoButtons = () => {
  const navigate = useNavigate();
  const { clearFilters, handleSearchNavigation } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-buttons']}`}>
      <button onClick={clearFilters}>Clear</button>
      <button onClick={() => handleSearchNavigation(navigate)}>
        Show Results
      </button>
    </div>
  );
};
export default FilterDinoButtons;
