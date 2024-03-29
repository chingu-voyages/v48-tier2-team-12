import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import { altPics } from '../utils/pretty-pics.tsx';

export default function Home() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [originalDinos, setOriginalDinos] = useState<Dino[]>([]);

  const filterDinos = (filterFunction: (dino: Dino) => boolean) => 
  {
    setDinos(originalDinos.filter((dino) => filterFunction(dino)));
  };

  useEffect(() => {
    fetchDinos().then((data) => {
      
      data.map(item => {
        altPics.forEach(element => {
          //for rendering small imgs on the grid when available:
          element.smallImg && item.id === element.id ? 
          item.imageSrc = element.smallImg : 
          ""
        });
        
      }) 
      setOriginalDinos(data);
      setDinos(data);
    });
  }, []);

  return (
    <main className="container">
      <h2 className="home-title">Which dino do you want to learn about?</h2>
      { originalDinos === dinos && <Search /> }
      <CategoryTiles filterDinos={filterDinos} />
      {originalDinos === dinos && <DinosaurOfTheDay /> }
      <DinoCardGrid dinos={dinos} />
    </main>
  );
}
