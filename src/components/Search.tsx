import styles from '../css-modules/Search.module.css';
import FilterModal from './FilterModal';
import magnifyingGlass from '../assets/magnifying-glass.svg';
import filter from '../assets/filter.svg';
import { FilterContext } from './FilterContext';
import { useContext } from 'react';

const Search = () => {
  const { isModalOpen, handleModal, dinoName, setDinoName } =
    useContext(FilterContext);

  return (
    <>
      {isModalOpen && <FilterModal />}
      <div className={styles.container}>
        <div className={styles['search-input-container']}>
          <input
            placeholder="Search"
            name="name"
            value={dinoName}
            onChange={(e) => setDinoName(e.target.value)}
          />
          <img src={magnifyingGlass} alt="Search" />
        </div>
        <span onClick={handleModal}>
          <img src={filter} alt="filter" />
        </span>
      </div>
    </>
  );
};
export default Search;
