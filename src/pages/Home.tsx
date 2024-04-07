import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';
import { NewsCardGrid } from '../components/NewsCardGrid.tsx';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import { altPics } from '../utils/pretty-pics.tsx';

export default function Home() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [originalDinos, setOriginalDinos] = useState<Dino[]>([]);
  const [displayDinos, setDisplayDinos] = useState<Dino[]>([]);

  const [loadIndex, setLoadIndex] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setIsLoading(true);
      setTimeout(() => {
        setLoadIndex((prevIndex) => prevIndex + 20);
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDisplayDinos(originalDinos.slice(0, loadIndex));
  }, [loadIndex, dinos]);

  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setDinos(originalDinos.filter((dino) => filterFunction(dino)));
  };

  useEffect(() => {
    fetchDinos().then((data) => {
      data.map((item) => {
        altPics.forEach((element) => {
          //for rendering small imgs on the grid when available:
          element.smallImg && item.id === element.id
            ? (item.imageSrc = element.smallImg)
            : '';
        });
      });
      setOriginalDinos(data);
      setDinos(data);
      setDisplayDinos(originalDinos.slice(0, 20));
    });
  }, []);

  return (
    <>
      <main className="container">
        {originalDinos === dinos && <Search />}
        <CategoryTiles filterDinos={filterDinos} />
        {originalDinos === dinos && <DinosaurOfTheDay />}
        {originalDinos === dinos && <NewsCardGrid />}
        <DinoCardGrid dinos={displayDinos} title="Discover" />
        {isLoading && displayDinos.length < originalDinos.length && (
          <p className="loading-text">Loading...</p>
        )}
      </main>
    </>
  );
}
