import { Dino } from '../interfaces/dino.interface';
import img1 from '../assets/dino-type-images/dino-type-1.png';
import img2 from '../assets/dino-type-images/dino-type-2.png';
import img3 from '../assets/dino-type-images/dino-type-3.png';
import img4 from '../assets/dino-type-images/dino-type-4.png';
import img5 from '../assets/dino-type-images/dino-type-5.png';
import img6 from '../assets/dino-type-images/dino-type-6.png';
import img7 from '../assets/dino-type-images/dino-type-7.svg';
import img8 from '../assets/dino-type-images/dino-type-8.svg';
import img9 from '../assets/dino-type-images/dino-type-9.svg';
import img10 from '../assets/dino-type-images/dino-type-10.svg';
import img11 from '../assets/dino-type-images/dino-type-11.svg';

export const categories = [
  {
    title: 'Carnivorous',
    icon: img11,
    filterFunction: (dino: Dino) => {
      return dino.diet === 'carnivorous';
    },
  },
  {
    title: 'Mongolia',
    icon: img10,
    filterFunction: (dino: Dino) => {
      return dino.foundIn?.includes('Mongolia');
    },
  },
  {
    title: 'Large Theropod',
    icon: img9,
    filterFunction: (dino: Dino) => {
      return dino.typeOfDinosaur === 'large theropod';
    },
  },
  {
    title: 'Late Jurassic',
    icon: img8,
    filterFunction: (dino: Dino) => {
      return dino.whenLived?.includes('Late Jurassic');
    },
  },
  {
    title: 'Large Dinosaur',
    icon: img7,
    filterFunction: (dino: Dino) => {
      if (dino.length === 'N/A') return false;
      return dino.length ? dino.length >= 15 : false;
    },
  },
  {
    title: 'Sauropod',
    icon: img6,
    filterFunction: (dino: Dino) => {
      return dino.typeOfDinosaur === 'sauropod';
    },
  },
  {
    title: 'Small Theropod',
    icon: img5,
    filterFunction: (dino: Dino) => {
      return dino.typeOfDinosaur === 'small theropod';
    },
  },
  {
    title: 'Large Ornithopod',
    icon: img4,
    filterFunction: (dino: Dino) => {
      return dino.typeOfDinosaur === 'large ornithopod';
    },
  },
  {
    title: 'Armoured',
    icon: img3,
    filterFunction: (dino: Dino) => {
      return dino.typeOfDinosaur === 'armoured dinosaur';
    },
  },
  {
    title: 'Herbivorous',
    icon: img2,
    filterFunction: (dino: Dino) => {
      return dino.diet === 'herbivorous';
    },
  },
  {
    title: 'Omnivorous',
    icon: img1,
    filterFunction: (dino: Dino) => {
      return dino.diet === 'omnivorous';
    },
  },
];
