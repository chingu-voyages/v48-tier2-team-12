import { DinoCard } from './DinoCard';
import classes from '../css-modules/DinoCardGrid.module.css';
import { Dino } from '../interfaces/dino.interface';

export function DinoCardGrid({ dinos }: { dinos: Dino[] }) {
  return (
    <>
      <h2 className={classes.smallCardGridTitle}>Discover</h2>
      <div className={classes.smallCardGrid}>
        {dinos.map((dino, index) => (
          <DinoCard
            key={index}
            id={dino.id}
            imageSrc={dino.imageSrc}
            name={dino.name} 
            description=""
            foundIn=""
          />
        ))}
      </div>
    </>
  );
}
