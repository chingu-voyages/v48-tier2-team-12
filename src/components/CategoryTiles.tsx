import styles from '../css-modules/CategoryTiles.module.css';
import img1 from '../assets/carnivore-icon.png';

const tileInfo = [
  {
    src: img1,
    alt: 'Carnivore',
  },
  {
    src: img1,
    alt: 'Carnivore',
  },
  {
    src: img1,
    alt: 'Carnivore',
  },
  {
    src: img1,
    alt: 'Carnivore',
  },
  {
    src: img1,
    alt: 'Carnivore',
  },
];

const CategoryTiles = () => {
  return (
    <div className={styles['categories']}>
      {tileInfo.map((tile) => {
        return (
          <div className={styles['square']}>
            <img className={styles['icon']} src={tile.src} alt={tile.alt} />
          </div>
        );
      })}
    </div>
  );
};
export default CategoryTiles;
