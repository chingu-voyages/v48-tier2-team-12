import { createContext, useState } from 'react';

export const FilterContext = createContext<any>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [dinoName, setDinoName] = useState<undefined | string>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [length, setLength] = useState();
  // const [weight, setWeight] = useState();
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

  const handleDinoLength = () => {};

  const handleDinoWeight = () => {};

  const clearFilters = () => {
    setDiet(undefined);
    setWhenLived(undefined);
    setTypeOfDinosaur(undefined);
    setCountry(undefined);
  };

  let dinoSearchParams: any = {};
  if (typeOfDinosaur !== undefined)
    dinoSearchParams.typeOfDinosaur = typeOfDinosaur;
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
        diet,
        handleDinoDiet,
        whenLived,
        handleWhenLived,
        country,
        handleCountry,
        handleDinoLength,
        handleDinoWeight,
        handleSearch,
        dinoSearchParams,
        clearFilters,
        dinoName,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
