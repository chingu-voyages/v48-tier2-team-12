import ShowDino from '../components/Alternative-ShowDinos';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';

export default function Home() {
  return (
    <main className="container">
      <h2 className="home-title">Which dino do you want to learn about?</h2>
      <Search />
      <CategoryTiles />
      <DinosaurOfTheDay />
      <ShowDino />
      <DinoCardGrid />
    </main>
  );
}
