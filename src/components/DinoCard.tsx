import { Dino } from "../interfaces/dino.interface";
import styles from "../css-modules/DinoCard.module.css";
import { Link } from "react-router-dom";
import emptyStateImg from "../assets/no-image.svg";
export function DinoCard(props: Dino) {
  return (
    <Link to={`/dino/${props.id}`} className={styles.smallCard}>
      <img
        className={styles.smallCardImage}
        src={props.imageSrc}
        alt={
          props.imageSrc === emptyStateImg
            ? "No Image Discovered Yet"
            : `image of ${props.name}`
        }
      />
      {props.imageSrc === emptyStateImg && (
        <p className={styles.noImageDesc}>No Image Discovered Yet</p>
      )}
      <div className={styles.smallCardTitle}>
        {props.name}

        {/* --- FOR TEST ONLY ---- */}
        {/* <p>Weight: {props.weight}</p>
        <p>Length: {props.length}</p> */}
        {/* ---------------------- */}
      </div>
    </Link>
  );
}
