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
  // type NewsFromLS =  {dinopediaNews : Article[]}
  //how-to-arrange-local-storage-in-typescript :
  //https://marketsplash.com/tutorials/typescript/how-to-arrange-local-storage-in-typescript/
  useEffect(() => {  
      const retrieveNews = ():  Article[] | null => {
      const newsData = localStorage.getItem('dinopediaNews');
      return newsData ? JSON.parse(newsData) as Article[] : null;
      };
      const results = retrieveNews()
      
      // const newsFromLS:string|null = localStorage.getItem('dinopedia-news')
      // const parsedNewsFromLS  = JSON.parse(newsFromLS)
      results && setArticles(results);
  } , []); 

    // nextTimeToFetchNews is equal to 'the timestamp sent to LS' + 24 hours
    const nextTimeToFetchNews = Number(timestamp) + 1 * 24 * 60 * 60 * 1000;


    const timeComparison = () => {
      if (!timestamp || now >= nextTimeToFetchNews) {
        setisTimeToFetchNews(true);
        console.log('fetching', nextTimeToFetchNews.toLocaleString())
      }
    };

  useEffect(() => {
    if (isTimeToFetchNews) {
      fetchNews().then((response) => {
        const news = response.articles
        setArticles(response.articles);
        const storeNews = (news: Article[]) => {
          localStorage.setItem("dinopediaNews", JSON.stringify(news));
      };
      storeNews(news)
        
      });

      setisTimeToFetchNews(false);
      localStorage.setItem('dinopedia-news-timestamp', now.toString());
    }
    timeComparison();
  }, []);

  const pickOnlyFewNews = (articlesArray: Article[]) => {
    const randomFewNews = []
    //picking only 4 out of 10 news randomly now (i < 4)
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
