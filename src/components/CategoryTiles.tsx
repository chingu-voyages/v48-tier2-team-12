import styles from '../css-modules/CategoryTiles.module.css';

const tileInfo = [
  {
    src: 'src/assets/carnivore-icon.png',
    alt: 'Carnivore',
  },
  {
    src: 'src/assets/carnivore-icon.png',
    alt: 'Carnivore',
  },
  {
    src: 'src/assets/carnivore-icon.png',
    alt: 'Carnivore',
  },
  {
    src: 'src/assets/carnivore-icon.png',
    alt: 'Carnivore',
  },
  {
    src: 'src/assets/carnivore-icon.png',
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
