import { DinoCard } from './DinoCard';
import classes from '../css-modules/DinoCardGrid.module.css';
import { Dino } from '../interfaces/dino.interface';
import emptyStateImg from '../assets/no-image.svg'

export function DinoCardGrid({ dinos }: { dinos: Dino[] }) {
  return (
    <>
      <h2 className={classes.smallCardGridTitle}>Discover</h2>
      <div className={classes.smallCardGrid}>
        {dinos.map((dino, index) => (
          <DinoCard
            key={index}
            id={dino.id}
            imageSrc={
              dino.imageSrc === "N/A" ?
              emptyStateImg : 
              dino.imageSrc 
            }
            name={dino.name} 
            description=""
            foundIn=""
          />
        ))}
      </div>
    </>
  );
}
