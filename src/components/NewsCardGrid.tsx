import { useEffect, useState } from "react";
import { Article } from "../interfaces/article.interface";
import { fetchNews } from "../utils/news-api";
import { NewsCard, NewsErrorHandling } from "./NewsCard";
import classes from "../css-modules/NewsCardGrid.module.css";

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isTimeToFetchNews, setisTimeToFetchNews] = useState<Boolean>(false)
  const now  = new Date().getTime()

  const timestamp = localStorage.getItem('dinopedia-news-timestamp')

  // nextTimeToFetchNews is equal to 'the timestamp sent to LS' + 24 hours
  const nextTimeToFetchNews = Number(timestamp)  + (1 * 24 * 60 * 60 * 1000)
  console.log(localStorage.getItem('dinopedia-news'))

  const timeComparison = () => {
    if (!timestamp || now >= 1712008800000) {
      setisTimeToFetchNews(true)
      console.log('fetching', nextTimeToFetchNews)
    }
  }

    useEffect(() => {
      
      if ( isTimeToFetchNews ){
        fetchNews().then((response) => {
          setArticles(response.articles);
          localStorage.setItem('dinopedia-news', JSON.stringify(response.articles));
        });
        
        setisTimeToFetchNews(false)
        localStorage.setItem('dinopedia-news-timestamp', now.toString())
      
      }
      timeComparison()
    }, []);
  

  return (
    <div className={classes.newsContainer}>
      <div className={classes.newsCardGridLabel}>News</div>
      <div className={classes.newsCardGrid}>
        <div>
          {
          articles ? 
            articles.map((article, index) => (
              <NewsCard key={index} {...article} />
            )) : 
            <NewsErrorHandling  />
          }
        </div>
        <div>
          { isTimeToFetchNews ? "Fetching..." :  "More news tomorrow" }
        </div>
      </div>
    </div>
  );
}