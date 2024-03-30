import { createContext, useState } from 'react';

export const FilterContext = createContext<any>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [dinoName, setDinoName] = useState<undefined | string>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [length, setLength] = useState();
  // const [weight, setWeight] = useState();
  const [diet, setDiet] = useState<string | undefined>(undefined);
  const [whenLived, setWhenLived] = useState<string | undefined>(undefined);
  const [typeOfDinosaur, setTypeOfDinosaur] = useState<string | undefined>(
    undefined
  );

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
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
  };

  let dinoSearchParams: any = {};
  if (typeOfDinosaur !== undefined)
    dinoSearchParams.typeOfDinosaur = typeOfDinosaur;
  if (diet !== undefined) dinoSearchParams.diet = diet;
  if (whenLived !== undefined) dinoSearchParams.whenLived = whenLived;

  return (
    <FilterContext.Provider
      value={{
        isModalOpen,
        handleModal,
        handleTypeOfDinosaur,
        handleDinoDiet,
        handleWhenLived,
        handleDinoLength,
        handleDinoWeight,
        setDinoName,
        dinoSearchParams,
        clearFilters,
        dinoName,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
