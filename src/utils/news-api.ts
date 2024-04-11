import { GNewsResponse, Article } from "../interfaces/article.interface";

export async function fetchNews(): Promise<GNewsResponse> {
  // Request a Key on https://gnews.io - limit with Free Account = 100 requests/day
  // const apiKey: string = "05996a44c3aabae82b516a7dfc983208";
  const apiKey: string = "e919766f1ea7f6095f9d487debb02058";
  const query: string = 
  `(dinosaur OR paleontology OR fossil OR Jurassic OR Cretaceous) AND 
(paleontologist OR theropod OR sauropod OR tyrannosaurus OR triceratops OR
 velociraptor OR stegosaurus OR brachiosaurus OR pterosaur)`
  // took out '&country=us'

  // const url: string =
  // `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&sortby=relevance&apikey=${apiKey}`;

  const url: string = 
  `https://gnews.io/api/v4/top-headlines?category=science&lang=en&apikey=${apiKey}&q=${query}`;

  const response = await fetch(url);
  return await response.json();
}

export const now = new Date().getTime();

//Compares timestamp from local storage with now 
//and decides if it's time to fetch data again
export const isTimeToFetch = (timestampName: string) => {
  const timestamp = localStorage.getItem(timestampName);
  const nextTimeToFetch = 
  timestamp ? (Number(timestamp) + 1 * 24 * 60 * 60 * 1000) : now;

  return !timestamp || now >= nextTimeToFetch
};

export const pickOnlyFewNews = (articlesArray: Article[]) => {
  const randomFewNews = [];
  //picking only 4 out of 10 fetched news randomly now (i < 4)
  for (let i = 0; i < 4; i++) {
    randomFewNews.push(
      articlesArray[Math.floor(Math.random() * articlesArray.length)]
    );
  }
  return randomFewNews
}