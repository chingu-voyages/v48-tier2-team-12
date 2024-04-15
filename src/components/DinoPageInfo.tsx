import styles from '../css-modules/DinoPageInfo.module.css';

const DinoPageInfo = ({
  title,
  value,
  capitalize,
}: {
  title: string;
  value: string;
  capitalize?: boolean;
}) => {
  return (
    <div className={`${styles.infoContainer}`}>
      <div className={styles.boldCatTitle}>{title}:</div>
      <div className={capitalize ? styles.capitalize : ''}
          dangerouslySetInnerHTML={{
          __html: value?.replace(/\. /g, ". <p class='lineBreak'></p>")
            .split('.')
            .join('. ')
        }}></div>
    </div>
  );
};
export default DinoPageInfo;
