import { useEffect, useState } from 'react';
import { Article } from '../interfaces/article.interface';
import { fetchNews } from '../utils/news-api';
import { NewsCard, NewsErrorHandling } from './NewsCard';
import classes from '../css-modules/NewsCardGrid.module.css';

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const now = new Date().getTime();

  useEffect(() => {
    // Define an async function inside the effect for fetching news
    const fetchAndStoreNews = async () => {
      if (timeComparison()) { // If it's time to fetch
        const response = await fetchNews(); // Assuming fetchNews is an async function
        const news = response.articles;
        localStorage.setItem("dinopediaNews", JSON.stringify(news));
        localStorage.setItem('dinopedia-news-timestamp', now.toString());
        setArticles(news);
      }
    };

    // Call the async function
    fetchAndStoreNews();

    // Retrieve and set articles from localStorage if available
    const storedNews = localStorage.getItem('dinopediaNews');
    if (storedNews) {
      setArticles(JSON.parse(storedNews));
    }
  }, []);

  const timeComparison = () => {
    const timestamp = localStorage.getItem('dinopedia-news-timestamp');
    const nextTimeToFetchNews = timestamp ? (Number(timestamp) + 1 * 24 * 60 * 60 * 1000) : now;
    console.log('nextTimeToFetchNews', nextTimeToFetchNews)

    return !timestamp || now >= nextTimeToFetchNews
  };

  const pickOnlyFewNews = (articlesArray: Article[]) => {
    const randomFewNews = [];
    //picking only 4 out of 10 news randomly now (i < 4)
    for (let i = 0; i < 4; i++) {
      randomFewNews.push(
        articlesArray[Math.floor(Math.random() * articlesArray.length)]
      );
    }
    return randomFewNews
  }

  const test = () => timeComparison() ? ' Fetching...' : '  More news tomorrow'
  console.log("Should show 'Fetching...' only on the first time rendering or after 24h of last time the browser fetched news", test())

  return (
    <div className={classes.newsContainer}>
      <div className={classes.newsCardGridLabel}>News</div>
      <div className={classes.newsCardGrid}>
        <div>
          {articles ? (
            pickOnlyFewNews(articles).map((article, index) => (
              <NewsCard key={index} {...article} />
            ))
          ) : (
            <NewsErrorHandling />
          )}
        </div>
      </div>
    </div>
  );
}
