import { useState } from 'react';
import styles from '../css-modules/FilterModal.module.css';
import {
  filterDinoDiet,
  filterDinoEra,
  filterDinoType,
} from '../utils/categories';
import FilterContent from './FilterContent';
import { useNavigate } from 'react-router-dom';

const FilterModal = ({ handleModal }: { handleModal: () => void }) => {
  const navigate = useNavigate();
  const [typeOfDinosaur, setTypeOfDinosaur] = useState<string | undefined>(
    undefined
  );
  // const [length, setLength] = useState();
  // const [weight, setWeight] = useState();
  const [diet, setDiet] = useState<string | undefined>(undefined);
  const [whenLived, setWhenLived] = useState<string | undefined>(undefined);

  const handleTypeOfDinosaur = (cardData: string) => {
    setTypeOfDinosaur((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleDinoLength = () => {};

  const handleDinoWeight = () => {};

  const handleDinoDiet = (cardData: string) => {
    setDiet((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleWhenLived = (cardData: string) => {
    setWhenLived((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  // TODO: fix dinoSearchParams type
  let dinoSearchParams: any = {};
  if (typeOfDinosaur !== undefined)
    dinoSearchParams.typeOfDinosaur = typeOfDinosaur;
  if (diet !== undefined) dinoSearchParams.diet = diet;
  if (whenLived !== undefined) dinoSearchParams.whenLived = whenLived;

  return (
    <div className={`${styles['filter-modal']} container`}>
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
