import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Dino } from "../interfaces/dino.interface.ts";
import { fetchSingleDino } from "../utils/api.ts";
import NavBar from "../components/NavBar";
import {Map} from "../components/Map";
import classes from "../css-modules/DinoPage.module.css";

export default function DinoPage() {
  const { id } = useParams();

  const [dino, setDino] = useState<Dino>(Object);

  useEffect(() => {
    const fetchDinoPage = async () => {
      const singleDino = await fetchSingleDino(id);
      setDino(singleDino);
    };
    fetchDinoPage();
  }, [id]);

  // DELETE LATER
  console.log(dino);

  return (
    <main>
      <NavBar />
      <div className="container">
        <div key={dino.name}>
          <h2 className={classes.DinoPageTitle}>{dino.name}</h2>
          <div className={classes.DinoMainImgContainer}>
            <img src={dino.imageSrc} className={classes.DinoMainImg} />
          </div>
          <p>{dino.description}</p>
        </div>
        <Map foundIn={dino.foundIn}/> 
      </div>
      
    </main>
  );
}
