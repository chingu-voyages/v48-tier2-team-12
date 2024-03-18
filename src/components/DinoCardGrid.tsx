import { DinoCard } from "./DinoCard";
import classes from "./DinoCardGrid.module.css";

export function DinoCardGrid() {
  return (
    <>
      <h2 className="smallCardGridTitle">Discover</h2>
      <div className={classes.smallCardGrid}>
        <DinoCard />
        <DinoCard />
        <DinoCard />
        <DinoCard />
      </div>
    </>
  );
}
