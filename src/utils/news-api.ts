import { GNewsResponse } from "../interfaces/article.interface";

export async function fetchNews(): Promise<GNewsResponse> {
  // Request a Key on https://gnews.io - limit with Free Account = 100 requests/day
  // const apiKey: string = "05996a44c3aabae82b516a7dfc983208";
  const apiKey: string = "96605289957c08c1352aaf8bff1793d4";
  // took out '&country=us'
  const url: string =
    "https://gnews.io/api/v4/search?q=dinosaur&lang=en&max=10&apikey=" +
    apiKey;

  const response = await fetch(url);
  return await response.json();
}
