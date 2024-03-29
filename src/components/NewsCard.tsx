import classes from "../css-modules/NewsCard.module.css";
import { Article } from "../interfaces/article.interface";

export function NewsCard(article: Article) {
  return (
    <div className={classes.newsCard}>
      <div className={classes.newsCardHeadline}>{article.title}</div>
      <div className={classes.newsCardSummary}>{article.description}</div>
    </div>
  );
}