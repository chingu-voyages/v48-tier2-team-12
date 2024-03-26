import styles from '../css-modules/CategoryTiles.module.css';

import { categories } from '../utils/categories';

const CategoryTiles = () => {
  return (
    <div className={styles.container}>
      {categories.map((tile) => {
        return (
          <button key={tile.title} className={styles.tile}>
            <img className={styles.icon} src={tile.icon} alt={tile.title} />
            <span className={styles.title}>{tile.title}</span>
          </button>
        );
      })}
    </div>
  );
};
export default CategoryTiles;
