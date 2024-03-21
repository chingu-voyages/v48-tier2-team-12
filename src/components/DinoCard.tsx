import { Dino } from "../interfaces/dino.interface";
import classes from "../css-modules/DinoCard.module.css";

export function DinoCard(props: Dino) {
  return (
    <div className={classes.smallCard}>
      <img className={classes.smallCardImage} src={props.imageSrc} alt="" />
      <div className={classes.smallCardTitle}>{props.name}</div>
    </div>
  );
}
