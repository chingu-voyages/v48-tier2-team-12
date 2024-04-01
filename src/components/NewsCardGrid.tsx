import { useEffect, useState } from "react";
import { Article } from "../interfaces/article.interface";
import { fetchNews } from "../utils/news-api";
import { NewsCard, NewsErrorHandling } from "./NewsCard";
import classes from "../css-modules/NewsCardGrid.module.css";

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchNews().then((response) => {
      setArticles(response.articles);
    });
  }, []);

  return (
    <>
      <div className={classes.newsCardGridLabel}>News</div>
      <div className={classes.newsCardGrid}>
        {
        articles ? 
        articles.map((article, index) => (
          <NewsCard key={index} {...article} />
        )) : 
        <NewsErrorHandling  />
        }
      </div>
    </>
  );
}