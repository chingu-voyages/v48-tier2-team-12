import classes from "./DinoCard.module.css";

export function DinoCard() {
  return (
    <div className={classes.smallCard}>
      <img
        className={classes.smallCardImage}
        src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2022/06/fausto-garcia-menendez-hYKG311mff8-unsplash.jpg.png"
        alt=""
      />
        <div className={classes.smallCardTitle}>Title</div>
      
    </div>
  );
}
