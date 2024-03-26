import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';

export default function Home() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [originalDinos, setOriginalDinos] = useState<Dino[]>([]);

  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setDinos(originalDinos.filter((dino) => filterFunction(dino)));
  };

  useEffect(() => {
    fetchDinos().then((data) => {
      setOriginalDinos(data);
      setDinos(data);
    });
  }, []);

  return (
    <main className="container">
      <h2 className="home-title">Which dino do you want to learn about?</h2>
      <Search />
      <CategoryTiles filterDinos={filterDinos} />
      <DinosaurOfTheDay />
      <DinoCardGrid dinos={dinos} />
    </main>
  );
}
