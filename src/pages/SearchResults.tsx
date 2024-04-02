import { useEffect, useState } from 'react';
import { DinoCardGrid } from '../components/DinoCardGrid';
import Search from '../components/Search';
import { fetchDinos } from '../utils/api';
import type { Dino } from '../interfaces/dino.interface.ts';
import { useSearchParams } from 'react-router-dom';

// type SearchParams = {
//     name: string;
//     typeOfDinosaur: string;
//     length: number;
//     length: number;
//     weight: number;
//     weight: number;
//     diet: string;
//     whenLived: string;
//   };

const SearchResults = () => {
  const [searchParams, _] = useSearchParams();
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let params: any = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    const fetchDinosSearch = async () => {
      setIsLoading(true);
      try {
        const dinosData = await fetchDinos();

        const searchResults = dinosData.filter((dino: Dino) => {
          return (
            (!params.dinoName ||
              dino.name
                ?.toLowerCase()
                .includes(params.dinoName.toLowerCase())) &&
            (!params.typeOfDinosaur ||
              dino.typeOfDinosaur === params.typeOfDinosaur) &&
            // (!params.length || dino.length === params.length) &&
            // (!params.weight || dino.weight === params.weight) &&
            (!params.diet || dino.diet === params.diet) &&
            (!params.whenLived || dino.whenLived?.includes(params.whenLived)) &&
            (!params.country || dino.foundIn?.includes(params.country))
          );
        });

        setIsLoading(false);

        setDinos(searchResults);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchDinosSearch();
  }, [searchParams]);

  return (
    <div className="container">
      <Search />
      {isLoading ? (
        <div>Loading...</div>
      ) : dinos.length === 0 ? (
        <div>No Dinos Were Found</div>
      ) : (
        <DinoCardGrid dinos={dinos} title="Search results" />
      )}
    </div>
  );
};

export default SearchResults;
