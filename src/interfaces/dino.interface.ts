export interface Dino {
  id?: number;
  name?: string;
  imageSrc?: string;
  typeOfDinosaur?: string;
  length?: number | 'N/A';
  weight?: number | 'N/A';
  diet?: string;
  whenLived?: string;
  foundIn: string;
  taxonomy?: string;
  namedBy?: string;
  typeSpecies?: string;
  description: string;
}
