import { useEffect, useState } from 'react';
import { Article } from '../interfaces/article.interface';
import { fetchNews, isTimeToFetchNews, pickOnlyFewNews, now } from '../utils/news-api';
import { NewsCard, NewsErrorHandling } from './NewsCard';
import styles from '../css-modules/NewsCardGrid.module.css';

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Define an async function inside the effect for fetching and storing news
    const fetchAndStoreNews = async () => {
      if (isTimeToFetchNews()) { // If it's time to fetch
        const response = await fetchNews();
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

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsCardGridLabel}>News</div>
      <div className={styles.newsCardGrid}>
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
