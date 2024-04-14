import { useLoaderData } from 'react-router-dom';
import { DinoCardGrid } from '../components/DinoCardGrid';
import { Dino } from '../interfaces/dino.interface';
import { useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';

export default function Discover() {
  const dinosData = useLoaderData() as Dino[];
  const [filteredDinos, setFilteredDinos] = useState(dinosData);

  // Filtering
  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setFilteredDinos(dinosData.filter((dino) => filterFunction(dino)));
    // setLoadIndex(20);
  };
  const resetFilterDinos = () => {
    setFilteredDinos(dinosData);
    // setLoadIndex(20);
  };

  return (
    <main className="container">
      <CategoryTiles
        filterDinos={filterDinos}
        resetFilterDinos={resetFilterDinos}
      />
      <DinoCardGrid dinos={filteredDinos} title="Discover" />
    </main>
  );
}
