import { useState } from 'react';
import styles from '../css-modules/FilterModal.module.css';
import {
  filterDinoDiet,
  filterDinoEra,
  filterDinoType,
} from '../utils/categories';
import FilterContent from './FilterContent';

const FilterModal = ({ handleModal }: { handleModal: () => void }) => {
  const [typeOfDinosaur, setTypeOfDinosaur] = useState();
  const [length, setLength] = useState();
  const [weight, setWeight] = useState();
  const [diet, setDiet] = useState();
  const [whenLived, setWhenLived] = useState();

  const handleDinoType = () => {};

  const handleDinoLength = () => {};

  const handleDinoWeight = () => {};

  const handleDinoDiet = () => {};

  const handleWhenLived = () => {};

  return (
    <div className={`${styles['filter-modal']}`}>
      <FilterContent title="Filter" contentType="close" onClick={handleModal} />

      <FilterContent
        data={filterDinoType}
        title="Type of Dinosaur"
        contentType="cards"
        onClick={handleDinoType}
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
        <button>Show Results</button>
      </div>
    </div>
  );
};
export default FilterModal;
