export interface Article {
  title: string;
  description: string;
  url: string;
}

export interface GNewsResponse {
  totalArticles: number;
  articles: Article[];
}
