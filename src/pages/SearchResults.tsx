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
            // Name
            (!params.dinoName ||
              dino.name
                ?.toLowerCase()
                .includes(params.dinoName.toLowerCase())) &&
            // Length          |Solving type error|
            (!params.minLength || dino.length && dino.length >= params.minLength ) &&
            (!params.maxLength || dino.length && dino.length <= params.maxLength) &&
            // Weight
            (!params.minWeight || dino.weight && dino.weight >= params.minWeight) &&
            (!params.maxWeight || dino.weight && dino.weight <= params.maxWeight) &&
            // Type
            (!params.typeOfDinosaur ||
              dino.typeOfDinosaur === params.typeOfDinosaur) &&
            // Diet
            (!params.diet || dino.diet === params.diet) &&
            // Era
            (!params.whenLived || dino.whenLived?.includes(params.whenLived)) &&
            // Country
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
