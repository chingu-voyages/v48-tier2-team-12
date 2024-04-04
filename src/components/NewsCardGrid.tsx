import { useEffect, useState } from 'react';
import { Article } from '../interfaces/article.interface';
import { fetchNews } from '../utils/news-api';
import { NewsCard, NewsErrorHandling } from './NewsCard';
import classes from '../css-modules/NewsCardGrid.module.css';

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isTimeToFetchNews, setisTimeToFetchNews] = useState<Boolean>(false);
  const now = new Date().getTime();
  const timestamp = localStorage.getItem('dinopedia-news-timestamp');

  useEffect(() => {
    const newsFromLS = localStorage.getItem('dinopedia-news');
    const parsedNewsFromLS = JSON.parse(newsFromLS ? newsFromLS : '');
    setArticles(parsedNewsFromLS);
  }, []);

  // nextTimeToFetchNews is equal to 'the timestamp sent to LS' + 24 hours
  const nextTimeToFetchNews = Number(timestamp) + 1 * 24 * 60 * 60 * 1000;

  const timeComparison = () => {
    if (!timestamp || now >= nextTimeToFetchNews) {
      setisTimeToFetchNews(true);
      // console.log('fetching', nextTimeToFetchNews.toLocaleString())
    }
  };

  useEffect(() => {
    if (isTimeToFetchNews) {
      fetchNews().then((response) => {
        setArticles(response.articles);
        localStorage.setItem(
          'dinopedia-news',
          JSON.stringify(response.articles)
        );
      });

      setisTimeToFetchNews(false);
      localStorage.setItem('dinopedia-news-timestamp', now.toString());
    }
    timeComparison();
  }, []);

  const pickOnlyFewNews = (articlesArray: Article[]) => {
    const randomFewNews = [];
    //picking only 4 out of 10 news randomly now (i < 4)
    for (let i = 0; i < 4; i++) {
      randomFewNews.push(
        articlesArray[Math.floor(Math.random() * articlesArray.length)]
      );
    }
    return randomFewNews;
  };

  // const test = () =>
  //   isTimeToFetchNews ? ' Fetching...' : '  More news tomorrow';
  // console.log(
  //   "Should show 'Fetching...' only on the first time rendering or after 24h of last time the browser fetched news",
  //   test()
  // );

  return (
    <div className={classes.newsContainer}>
      <div className={classes.newsCardGridLabel}>News</div>
      <div className={classes.newsCardGrid}>
        {/* <div>
          <p>Should show 'Fetching...' only on the first time rendering or after 24h of last time the browser fetched news</p>
          <p>{isTimeToFetchNews ? ' Fetching...' : '  More news tomorrow'}</p>
        </div> */}
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
