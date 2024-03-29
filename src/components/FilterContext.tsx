import { createContext, useState } from 'react';

export const FilterContext = createContext<any>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  // const [length, setLength] = useState();
  // const [weight, setWeight] = useState();
  const [diet, setDiet] = useState<string | undefined>(undefined);
  const [whenLived, setWhenLived] = useState<string | undefined>(undefined);
  const [typeOfDinosaur, setTypeOfDinosaur] = useState<string | undefined>(
    undefined
  );

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

  let dinoSearchParams: any = {};
  if (typeOfDinosaur !== undefined)
    dinoSearchParams.typeOfDinosaur = typeOfDinosaur;
  if (diet !== undefined) dinoSearchParams.diet = diet;
  if (whenLived !== undefined) dinoSearchParams.whenLived = whenLived;

  return (
    <FilterContext.Provider
      value={{
        handleTypeOfDinosaur,
        handleDinoDiet,
        handleWhenLived,
        handleDinoLength,
        handleDinoWeight,
        dinoSearchParams,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
