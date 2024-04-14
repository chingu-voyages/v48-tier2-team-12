import { useLoaderData } from 'react-router-dom';
import { DinoCardGrid } from '../components/DinoCardGrid';
import { Dino } from '../interfaces/dino.interface';
import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';

export default function Discover() {
  const dinosData = useLoaderData() as Dino[];
  const [filteredDinos, setFilteredDinos] = useState(dinosData);

  // Filtering
  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setFilteredDinos(dinosData.filter((dino) => filterFunction(dino)));
    setLoadIndex(20);
  };
  const resetFilterDinos = () => {
    setFilteredDinos(dinosData);
    setLoadIndex(20);
  };

  // Lazy Loading
  const [isLoading, setIsLoading] = useState(false);
  const [loadIndex, setLoadIndex] = useState(20);
  const [displayDinos, setDisplayDinos] = useState<Dino[]>(
    filteredDinos.slice(0, 20)
  );
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setLoadIndex((prevIndex) => prevIndex + 20);
        }, 500);
      }
    };

    const updateDisplayDinos = () => {
      setDisplayDinos(filteredDinos.slice(0, loadIndex));
    };

    window.addEventListener('scroll', handleScroll);
    updateDisplayDinos();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadIndex, filteredDinos]);

  return (
    <main className="container">
      <CategoryTiles
        filterDinos={filterDinos}
        resetFilterDinos={resetFilterDinos}
      />
      <DinoCardGrid dinos={displayDinos} title="Discover" />
      {displayDinos.length < filteredDinos.length && isLoading && (
        <p className="loading-text">Loading...</p>
      )}
    </main>
  );
}
