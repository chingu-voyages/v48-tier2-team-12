import ShowDino from '../components/Alternative-ShowDinos';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from "../components/DinosaurOfTheDay.tsx";
import filterButton from '../assets/filter.png';


export default function Home() {
  return (
    <main className="container">
      <h2 className="home-title">Which dino do you want to learn about?</h2>
      <div className="search-div">
        <input className="search-bar" placeholder="T-Rex" />
        <button className="filter-btn">
          <img alt="Filter Button" src={filterButton} />
        </button>
      </div>
      <CategoryTiles />
      <DinosaurOfTheDay/>
      <ShowDino />
      <DinoCardGrid />
    </main>
  );
}
