import { useContext } from 'react';
import styles from '../css-modules/FilterModal.module.css';
import {
  filterDinoDiet,
  filterDinoEra,
  filterDinoType,
} from '../utils/categories';
import FilterContent from './FilterContent';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from './FilterContext';

const FilterModal = ({ handleModal }: { handleModal: () => void }) => {
  const navigate = useNavigate();
  const {
    handleTypeOfDinosaur,
    handleDinoDiet,
    handleWhenLived,
    handleDinoLength,
    handleDinoWeight,
    dinoSearchParams,
  } = useContext(FilterContext);

  return (
    <div className={`${styles['filter-modal']}`}>
      <FilterContent title="Filter" contentType="close" onClick={handleModal} />

      <FilterContent
        data={filterDinoType}
        title="Type of Dinosaur"
        contentType="cards"
        onClick={handleTypeOfDinosaur}
      />

      <FilterContent
        data={100}
        title="Length"
        contentType="length"
        onClick={handleDinoLength}
      />

      <FilterContent
        data={100}
        title="Weight"
        contentType="weight"
        onClick={handleDinoWeight}
      />

      <FilterContent
        data={filterDinoDiet}
        title="Diet"
        contentType="cards"
        onClick={handleDinoDiet}
      />

      <FilterContent
        data={filterDinoEra}
        title="Era"
        contentType="textCards"
        onClick={handleWhenLived}
      />

      <div className={`${styles['filter-buttons']}`}>
        <button>Clear</button>
        <button
          onClick={() => {
            const urlParams = new URLSearchParams(dinoSearchParams);
            navigate(`/searchresults?${urlParams}`);
          }}
        >
          Show Results
        </button>
      </div>
    </div>
  );
};
export default FilterModal;
