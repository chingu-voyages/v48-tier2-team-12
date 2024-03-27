import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Dino } from "../interfaces/dino.interface.ts";
import { fetchSingleDino } from "../utils/api.ts";
import NavBar from "../components/NavBar";
import Map from "../components/Map";
import styles from "../css-modules/DinoPage.module.css";
import emptyStateImg from '../assets/no-image.svg'
import { altPics } from "../utils/pretty-pics.tsx";

export default function DinoPage() {
  const { id } = useParams();
  const [dino, setDino] = useState<Dino>(Object);

  // this img doesn't contain photo just text
  const uglyImgUrl:string = 
  `https://www.nhm.ac.uk/
  resources/nature-online/life/dinosaurs/
  dinosaur-directory/images/reconstruction/
  small/aardonyx.jpg`

  useEffect(() => {
    const fetchDinoPage = async () => {
      const singleDino = await fetchSingleDino(id);
      
        altPics.forEach(element => {
          Number(id) === element.id ? singleDino.imageSrc = element.img : ""
        });
      
      setDino(singleDino);
    };
    fetchDinoPage();
  }, [id]);
 
  return (
    <main>
      <NavBar />
      <div className="container">
          {/* TITLE */}
          <h2 className={styles.DinoPageTitle}>{dino.name}</h2>
          {/* IMAGE */}
          <img src={ dino.imageSrc === "N/A" || 
          dino.imageSrc === uglyImgUrl ? 
          emptyStateImg : dino.imageSrc } className={styles.DinoMainImg} />
          {/* INFO */}
          <div className={styles.info}>
            <p>
              <span className={styles.boldCatTitle}
              >Type of Dinosaur: 
              </span>
              <span className={styles.capitalize}>
                {dino.typeOfDinosaur}
              </span>
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Length: </span>
              {dino.length}{dino.length !== "N/A" && " Meters"}
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Weight: </span>
              {dino.weight}{dino.weight !== "N/A" && "  Kilograms"}
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Diet: </span>
              <span className={styles.capitalize}>
                {dino.diet}
              </span>
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Era: </span>
              {dino.whenLived}
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Location: </span>
              {dino.foundIn}
            </p>

            <div className={styles.descriptionBox}>
              <p className={styles.boldCatTitle}
              >Taxonomy:
              </p>
              <p className={styles.description}
              >{dino.taxonomy}
              </p>
            </div>

            <p>
              <span className={styles.boldCatTitle}
              >Named By: </span>
              {dino.namedBy}
            </p>
            <p>
              <span className={styles.boldCatTitle}
              >Type of Species: </span>
              <span className={styles.capitalize}>
                {dino.typeSpecies}
              </span>
            </p>

            <div className={styles.descriptionBox}>
              <p className={styles.boldCatTitle}
              >Description:
              </p>
              <p className={styles.description}
              >{dino.description}
              </p>
            </div>
          </div>
        
        {/* MAP: Sending only the first country */}
        <Map country={dino.foundIn?.split(', ')[0]}/> 
      </div>
      
    </main>
  );
}
