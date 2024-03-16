import classes from "./DinoCard.module.css";

export function DinoCard() {
  return (
    <div className="grid">
      <div className="row">
        <div className={classes.smallCard}>
          <img
            className={classes.smallCardImage}
            src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2022/06/fausto-garcia-menendez-hYKG311mff8-unsplash.jpg.png"
            alt=""
          />
          <div className={classes.smallCardDetails}>
            <div className={classes.smallCardText}>Title</div>
          </div>
        </div>
      </div>
    </div>
  );
}
