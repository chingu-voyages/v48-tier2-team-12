import { createContext, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

export const FilterContext = createContext<any>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [dinoName, setDinoName] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minLength, setMinLength] = useState<number | undefined>(undefined);
  const [maxLength, setMaxLength] = useState<number | undefined>(undefined);
  const [minWeight, setMinWeight] = useState<number | undefined>(undefined);
  const [maxWeight, setMaxWeight] = useState<number | undefined>(undefined);
  const [diet, setDiet] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [whenLived, setWhenLived] = useState<string | undefined>(undefined);
  const [typeOfDinosaur, setTypeOfDinosaur] = useState<string | undefined>(
    undefined
  );

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDinoName(value);
  };

  const handleLength = (value: number[]) => {
    setMinLength(value[0]);
    setMaxLength(value[1]);
  };

  const handleWeight = (value: number[]) => {
    setMinWeight(value[0]);
    setMaxWeight(value[1]);
  };

  const handleCountry = (cardData: string) => {
    setCountry((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleTypeOfDinosaur = (cardData: string) => {
    setTypeOfDinosaur((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleDinoDiet = (cardData: string) => {
    setDiet((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleWhenLived = (cardData: string) => {
    setWhenLived((prev) => {
      if (prev === cardData) return undefined;
      return cardData;
    });
  };

  const handleSearchNavigation = (navigate: NavigateFunction) => {
    const urlParams = new URLSearchParams(dinoSearchParams);
    navigate(`/searchresults?${urlParams}`);
    setIsModalOpen(false);
  };

  const clearFilters = () => {
    setDinoName('');
    setMinLength(undefined);
    setMaxLength(undefined);
    setMinWeight(undefined);
    setMaxWeight(undefined);
    setTypeOfDinosaur(undefined);
    setDiet(undefined);
    setWhenLived(undefined);
    setCountry(undefined);
  };

  let dinoSearchParams: any = {};
  if (typeOfDinosaur !== undefined)
    dinoSearchParams.typeOfDinosaur = typeOfDinosaur;
  if (minLength !== undefined) dinoSearchParams.minLength = minLength;
  if (maxLength !== undefined) dinoSearchParams.maxLength = maxLength;
  if (minWeight !== undefined) dinoSearchParams.minWeight = minWeight;
  if (maxWeight !== undefined) dinoSearchParams.maxWeight = maxWeight;
  if (diet !== undefined) dinoSearchParams.diet = diet;
  if (whenLived !== undefined) dinoSearchParams.whenLived = whenLived;
  if (country !== undefined) dinoSearchParams.country = country;
  if (dinoName !== undefined && dinoName.trim() !== '')
    dinoSearchParams.dinoName = dinoName.trim();

  return (
    <FilterContext.Provider
      value={{
        isModalOpen,
        handleModal,
        typeOfDinosaur,
        handleTypeOfDinosaur,
        minLength,
        maxLength,
        handleLength,
        minWeight,
        maxWeight,
        handleWeight,
        diet,
        handleDinoDiet,
        whenLived,
        handleWhenLived,
        country,
        handleCountry,
        handleSearch,
        dinoSearchParams,
        clearFilters,
        dinoName,
        handleSearchNavigation,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
