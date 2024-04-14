import { useEffect, useState } from 'react';
import { DinoCardGrid } from '../components/DinoCardGrid';
import Search from '../components/Search';
import type { Dino } from '../interfaces/dino.interface.ts';
import { useLoaderData, useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const dinosData = useLoaderData() as Dino[];

  const [searchParams, _] = useSearchParams();
  const [dinos, setDinos] = useState<Dino[]>([]);

  useEffect(() => {
    let params: any = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    const searchResults = dinosData.filter((dino: Dino) => {
      return (
        // Name
        (!params.dinoName ||
          dino.name?.toLowerCase().includes(params.dinoName.toLowerCase())) &&
        // Length
        (!params.minLength ||
          (dino.length && dino.length >= params.minLength)) &&
        (!params.maxLength ||
          (dino.length && dino.length <= params.maxLength)) &&
        // Weight
        (!params.minWeight ||
          (dino.weight && dino.weight >= params.minWeight)) &&
        (!params.maxWeight ||
          (dino.weight && dino.weight <= params.maxWeight)) &&
        // Type
        (!params.typeOfDinosaur ||
          dino.typeOfDinosaur === params.typeOfDinosaur) &&
        // Diet
        (!params.diet || dino.diet === params.diet) &&
        // Era
        (!params.whenLived || dino.whenLived?.includes(params.whenLived)) &&
        // Country
        (!params.country || dino.foundIn?.includes(params.country)) &&
        // Image Only
        (!params.imageOnly || dino.imageSrc !== 'N/A')
      );
    });
    setDinos(searchResults);
  }, [searchParams]);

  return (
    <div className="container">
      <Search />
      {dinos.length === 0 ? (
        <div>No Dinos Were Found</div>
      ) : (
        <DinoCardGrid dinos={dinos} title="Search results" />
      )}
    </div>
  );
};

export default SearchResults;
