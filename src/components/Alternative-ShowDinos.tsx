import { useEffect, useState } from 'react';
import type { Dino } from '../interfaces/dino.interface.ts';

export default function ShowDino() {
  const [dino, setDino] = useState<Dino>(Object);

  useEffect(() => {
    fetch('https://chinguapi.onrender.com/dinosaurs')
      .then((res) => res.json())
      .then((data) => setDino(data[296]));
    // .then(() => console.log(dino.description.slice(0, 250), "..."))
  }, []);

  return (
    <>
      <div className="dino-card">
        <h2 className="card-title">Dinosaur of the day</h2>
        <img src={dino.imageSrc} alt="T-rex" className="dino-card--img" />
        <h3 className="dino-card--name">{dino.name}</h3>
        {dino.description ? (
          <>
            <p className="dino-card--desc">
              {dino.description.slice(0, 141)}...
            </p>
            <button className="learn-more-btn">Learn More</button>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

//undo side effect function
// types: <Dino>
// initial state: (Object)
// try... catch(error)
//{dino.description} .slice?
//Discover: lazy load of all dinosaurs? or just a few?
// imgs from https://www.mohamadhaghani.com/ ?
