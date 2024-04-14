import styles from '../css-modules/DinoPageInfo.module.css';

const DinoPageInfo = ({
  title,
  value,
  capitalize,
}: {
  title: string;
  value: string | undefined;
  capitalize?: boolean;
}) => {
  return (
    <div className={`${styles.infoContainer}`}>
      <div className={styles.boldCatTitle}>{title}:</div>
      <div className={capitalize ? styles.capitalize : ''}>{value}</div>
    </div>
  );
};
export default DinoPageInfo;
