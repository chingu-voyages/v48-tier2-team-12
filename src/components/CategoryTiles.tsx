import styles from '../css-modules/CategoryTiles.module.css';
import { categories } from '../utils/categories';

//Need to find type for this function later
const CategoryTiles = ({filterDinos, }: any) => {

  return (
    <div className={styles.container}>
      {categories.map((tile) => {
        return (
          <button
            key={tile.title}
            className={styles.tile}
            onClick={
              () => {
              filterDinos(tile.filterFunction);
              console.log(filterDinos(tile.filterFunction))
              }
            }
          >
            <img className={styles.icon} src={tile.icon} alt={tile.title} />
            <span className={styles.title}>{tile.title}</span>
          </button>
        );
      })}
    </div>
  );
};
export default CategoryTiles;
