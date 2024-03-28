import { useState } from 'react';
import styles from '../css-modules/Search.module.css';
import FilterModal from './FilterModal';
import magnifyingGlass from '../assets/magnifying-glass.svg';
import filter from '../assets/filter.svg';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {isModalOpen && <FilterModal handleModal={handleModal} />}
      <div className={styles.container}>
        <div className={styles['search-input-container']}>
          <input placeholder="Search" />
          <img src={magnifyingGlass} alt="Search" />
        </div>
        <span onClick={() => setIsModalOpen(true)}>
          <img src={filter} alt="filter" />
        </span>
      </div>
    </>
  );
};
export default Search;
