import styles from '../css-modules/Search.module.css';
import FilterModal from './Filter/FilterModal';
import magnifyingGlass from '../assets/magnifying-glass.svg';
import filter from '../assets/filter.svg';
import { FilterContext } from './Filter/FilterContext';
import { useContext } from 'react';

const Search = () => {
  const { isModalOpen, handleModal, dinoName, handleSearch } =
    useContext(FilterContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles['search-input-container']}>
          <input
            placeholder="Search"
            name="name"
            value={dinoName}
            onChange={(e) => handleSearch(e)}
          />
          <img src={magnifyingGlass} alt="Search" />
        </div>
        <span onClick={handleModal}>
          <img className={styles.filterImg} src={filter} alt="filter" />
        </span>
      </div>
      {isModalOpen && <FilterModal />}
    </>
  );
};
export default Search;
