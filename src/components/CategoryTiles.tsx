import { useState } from 'react';
import styles from '../css-modules/CategoryTiles.module.css';
import { categories } from '../utils/categories';

const CategoryTiles = ({ filterDinos, resetFilterDinos }: any) => {
  const [activeTile, setActiveTile] = useState('');

  return (
    <div className={styles.container}>
      {categories.map((tile) => {
        const { title, filterFunction } = tile;
        const isActive = activeTile === title;
        return (
          <button
            key={title}
            className={`${styles.tile} ${isActive ? styles.activeTile : ''}`}
            onClick={() => {
              if (!isActive) {
                filterDinos(filterFunction);
                setActiveTile(title);
              } else {
                resetFilterDinos();
                setActiveTile('');
              }
            }}
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
