import { Dino } from '../interfaces/dino.interface';
import styles from '../css-modules/DinoCard.module.css';
import { Link } from 'react-router-dom';

export function DinoCard(props: Dino) {
  return (
    <Link 
      to={`/dino/${props.id}`} 
      className={styles.smallCard}>
        <img 
          className={styles.smallCardImage} 
          src={props.imageSrc} 
          alt={`image of ${props.name}`} 
        />
        <div className={styles.smallCardTitle}
        >{props.name}
        </div>
    </Link>
  );
}
