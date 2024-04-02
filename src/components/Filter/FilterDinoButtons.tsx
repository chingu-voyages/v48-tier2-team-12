import { useNavigate } from 'react-router-dom';
import styles from '../../css-modules/FilterContent.module.css';
import { useContext } from 'react';
import { FilterContext } from './FilterContext';

const FilterDinoButtons = () => {
  const navigate = useNavigate();
  const { dinoSearchParams, handleModal, clearFilters } =
    useContext(FilterContext);

  const handleSearch = () => {
    const urlParams = new URLSearchParams(dinoSearchParams);
    navigate(`/searchresults?${urlParams}`);
    handleModal();
  };

  return (
    <div className={`${styles['filter-buttons']}`}>
      <button onClick={clearFilters}>Clear</button>
      <button onClick={handleSearch}>Show Results</button>
    </div>
  );
};
export default FilterDinoButtons;
