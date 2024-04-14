import { Dino } from '../interfaces/dino.interface';
import { altPics } from '../utils/pretty-pics.tsx';

export async function fetchDinos(): Promise<Dino[]> {
  const response = await fetch('https://chinguapi.onrender.com/dinosaurs');
  const data: Dino[] = await response.json();

  // Mapping and replacing images
  data.map((item: Dino) => {
    altPics.forEach((element) => {
      item.id === element.id ? (item.imageSrc = element.img) : '';
    });
  })
  return data;
}

export async function fetchSingleDino(id: number | undefined): Promise<Dino> {
  const response = await fetch(
    `https://chinguapi.onrender.com/dinosaurs/${id}`
  );
  const data: Dino = await response.json();

  // Replacing new pretty images
  altPics.forEach((element) => {
    Number(data.id) === element.id ? (data.imageSrc = element.img) : '';
  });
  return data;
}
