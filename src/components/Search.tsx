import styles from '../css-modules/Search.module.css';
import FilterModal from './Filter/FilterModal';
import magnifyingGlass from '../assets/magnifying-glass.svg';
import filter from '../assets/filter.svg';
import { FilterContext } from './Filter/FilterContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const {
    isModalOpen,
    handleModal,
    dinoName,
    handleSearch,
    handleSearchNavigation,
  } = useContext(FilterContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles['search-input-container']}>
          <input
            placeholder="Search"
            name="name"
            value={dinoName}
            onChange={(e) => handleSearch(e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchNavigation(navigate);
            }}
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
