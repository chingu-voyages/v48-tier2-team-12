import classes from "../css-modules/NewsCard.module.css";
import { Article } from "../interfaces/article.interface";

export function NewsCard(article: Article) {
  return (
    <div className={classes.newsCard}>
      <div className={classes.newsCardHeadline}>
        {article.title}
      </div>
      <div className={classes.newsCardSummary}>
        {article.description}
        <a 
        href={article.url} 
        className={classes.newsCardLink}
        target="_blank">Read More</a>
      </div>
    </div>
  );
}

export function NewsErrorHandling () {
  return (
  <div className={classes.newsCard}>
    <p>Oops, something went wrong here...</p>
  </div>
  );
}
