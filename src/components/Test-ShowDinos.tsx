import { useEffect, useState } from "react";
import type { Dino } from "../interfaces/dino.interface.ts";
import { fetchDinos } from "../utils/api.ts";

export function ShowDinos() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  useEffect(() => {
    fetchDinos().then((data) => setDinos(data));
  }, []);
  
  return (
    <div>
      {dinos.map((dino) => (
        <div key={dino.name}>
          <h2>{dino.name}</h2>
          <h2>{dino.type}</h2>
          <p>{dino.description}</p>
        </div>
      ))}
    </div>
  );
}

