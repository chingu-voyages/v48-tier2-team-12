import { useContext } from 'react';
import styles from '../../css-modules/FilterContent.module.css';
import { FilterContext } from './FilterContext';

const FilterImage = () => {
  const { imageOnly, setImageOnly } = useContext(FilterContext);

  return (
    <div className={styles.filterImage}>
      <label htmlFor="withImage">Only show dinosaur with image</label>
      <input
        type="checkbox"
        id="withImage"
        name="withImage"
        checked={imageOnly}
        onChange={() => {
          setImageOnly((prev: boolean) => !prev);
        }}
      />
    </div>
  );
};
export default FilterImage;
