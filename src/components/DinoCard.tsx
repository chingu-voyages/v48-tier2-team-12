import { Dino } from '../interfaces/dino.interface';
import classes from '../css-modules/DinoCard.module.css';
import { Link } from 'react-router-dom';

export function DinoCard(props: Dino) {
  return (
    <Link to={`/dino/${props.id}`} className={classes.smallCard}>
      <img className={classes.smallCardImage} src={props.imageSrc} alt={`image of ${props.name}`} />
      <div className={classes.smallCardTitle}>{props.name}</div>
    </Link>
  );
}
