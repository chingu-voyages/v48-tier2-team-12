import { DinoCard } from "./DinoCard";
import classes from "./DinoCardGrid.module.css";

export function DinoCardGrid() {
  return (
    <div className={classes.smallCardGrid}>
      <div className={classes.smallCardGridRow}>
        <DinoCard/>
        <DinoCard/>
        <DinoCard/>

      </div>
    </div>
  );
}
