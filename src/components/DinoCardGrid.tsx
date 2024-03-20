import { useEffect, useState } from "react";
import { DinoCard } from "./DinoCard";

import { fetchDinos } from "../utils/api";
import { Dino } from "../interfaces/dino.interface";
import classes from "./DinoCardGrid.module.css";

export function DinoCardGrid() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  useEffect(() => {
    fetchDinos().then((data) => setDinos(data));
  }, []);

  return  (
    <>
      {/* <h2 className={classes.smallCardGridTitle}>Discover</h2> */}
      <div className={classes.smallCardGrid}>
        
      {dinos.map((dino) => (
        
        <DinoCard
          imageSrc= {dino.imageSrc} //"https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2022/06/fausto-garcia-menendez-hYKG311mff8-unsplash.jpg.png"
          
          name= {dino.name} // "Dino Name"
          type=""
          description=""
          foundIn=""
        />
        ))}
      </div>
    </>
  );
}
