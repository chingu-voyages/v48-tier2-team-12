import { useEffect, useState } from "react";
import type { Dino } from "../interfaces/dino.interface.ts";

export default function ShowDino(){
    const [dino, setDino] = useState<Dino>(Object)
    useEffect(() => {
        fetch('https://chinguapi.onrender.com/dinosaurs')
        .then(res => res.json())
        .then(data => setDino(data[296]))
    }, [])
    return (
        <>
            <div className="content">
                <h2>Dinosaur of the day</h2>
                <img src={dino.imageSrc} alt="T-rex"/>
                <h3>{dino.name}</h3>
                <h4>{dino.foundIn}</h4>
                <p>{dino.description}</p>
                
            </div>
        </>
    )

}

//undo side effect function
// types: <Dino>
// initial state: (Object)
// try... catch(error)
//{dino.description} .slice?
//Discover: lazy load of all dinosaurs? or just a few?
// imgs from https://www.mohamadhaghani.com/ ?