import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';
import { NewsCardGrid } from '../components/NewsCardGrid.tsx';

export default function Home() {
  return (
    <main className="container">
      <Search />
      {/* <CategoryTiles filterDinos={filterDinos} /> */}
      <DinosaurOfTheDay />
      <NewsCardGrid />
    </main>
  );
}
