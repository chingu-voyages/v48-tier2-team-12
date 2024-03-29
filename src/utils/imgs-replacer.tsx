import { Dino } from '../interfaces/dino.interface';
import { altPics } from '../utils/pretty-pics.tsx';
//attempting to create a standard function
export const imgsReplacer = (data: Dino[], size :boolean = false) =>  {
    const result = data.map((item: Dino) => {
    altPics.forEach(element => {
        size && item.id === element.id ?
        item.imageSrc = element.smallImg : 
        element.img && item.id === element.id ?
        item.imageSrc = element.img : 
        ""
    });
  })
  return result
}

