import { useEffect, useState } from 'react';
import { Article } from '../interfaces/article.interface';
import { fetchNews } from '../utils/news-api';
import { NewsCard, NewsErrorHandling } from './NewsCard';
import classes from '../css-modules/NewsCardGrid.module.css';

export function NewsCardGrid() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [timestamp, setTimestamp] = useState<String | Number | null>(1712162756);
  const [isTimeToFetchNews, setisTimeToFetchNews] = useState<Boolean>(false);
  const now = new Date().getTime();

  //retrieving timestamp from LS
  useEffect(() => {
    const retrieveTimestamp = ():  String | null => {
      const timestampFromLS = localStorage.getItem('dinopedia-news-timestamp');
      return timestampFromLS ? JSON.parse(timestampFromLS) as String : null;
    };
    const retrievedTimestamp = retrieveTimestamp();
    retrievedTimestamp && setTimestamp(retrievedTimestamp);
  }, [])

  // nextTimeToFetchNews is equal to 'the timestamp sent to LS' + 24 hours
  
  // console.log(timestamp)
  //Will fetch only for the first time the user visits the page or every 24 hours
  const timeComparison = () => {
    const nextTimeToFetchNews = Number(timestamp) + 1 * 24 * 60 * 60 * 1000;
    
    if (timestamp === null) {
      const setTimestampInLS = (now: Number) => {
        localStorage.setItem('dinopedia-news-timestamp', now.toString());
      };
      setTimestampInLS(now)
      setisTimeToFetchNews(true)
    }
    if (timestamp !== null && now >= nextTimeToFetchNews) {
      setisTimeToFetchNews(true)
      console.log('nextTimeToFetchNews')
    }
    else {
      console.log('fetched already, next time:', nextTimeToFetchNews)
    }
  };

  //When timestamp changes compares time and fetch news
  useEffect(() => {

    timeComparison();
    if (isTimeToFetchNews) {

      fetchNews().then((response) => {
        const news = response.articles
        const storeNews = (news: Article[]) => {
          localStorage.setItem("dinopediaNews", JSON.stringify(news));
        };
      storeNews(news)
      setTimestamp(now)
      setisTimeToFetchNews(false);
      });
    }
  }, [isTimeToFetchNews]);

  //Retrieving news from LS
  useEffect(() => {  
    const retrieveNews = ():  Article[] | null => {
      const newsData = localStorage.getItem('dinopediaNews');
      return newsData ? JSON.parse(newsData) as Article[] : null;
    };
    const retrievedNewsFromLocalStorage = retrieveNews()

    retrievedNewsFromLocalStorage && setArticles(retrievedNewsFromLocalStorage);
  } , [isTimeToFetchNews]); 

  //picking only 4 out of 10 news randomly now (i < 4)
  const pickOnlyFewNews = (articlesArray: Article[]) => {
    const randomFewNews = []
    
    for (let i = 0; i < 4; i++) {
      randomFewNews.push(articlesArray[Math.floor(Math.random() * articlesArray.length)])
    }
    return randomFewNews
  }

  const test = () => isTimeToFetchNews ? ' Fetching...' : '  More news tomorrow'
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
