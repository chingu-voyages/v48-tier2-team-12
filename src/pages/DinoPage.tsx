import {  useEffect, useState } from "react";
import type { Dino } from "../interfaces/dino.interface.ts";
import { fetchDinos } from "../utils/api.ts";
import classes from "../css-modules/DinoPage.module.css";
import { RotatingLines } from "react-loader-spinner";
import NavBar from '../components/NavBar';

export default function DinoPage() {
    const [dino, setDino] = useState<Dino>(Object);
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();  
    const [loading, setLoading] = useState(true);
 
 
useEffect(() => {
     const fetchDinoPage = async () => {
        const allDinos = await fetchDinos();
            let dino: Dino|null = null;
            while (!dino) {
                const randomIndex = Math.floor(Math.random() * allDinos.length)
                if (allDinos[randomIndex].imageSrc !== 'N/A' && allDinos[randomIndex].description !== 'N/A' && allDinos[randomIndex].foundIn !== 'N/A') {
                    dino = allDinos[randomIndex]
                }
            }
            setDino(dino)
        };
        fetchDinoPage();
    //console.log(dino.foundIn)
    }, []); 



useEffect(() => {
    const getDinoCoordinate = async () => {
    if (dino.foundIn != undefined){
    const res = await fetch (`https://api.geoapify.com/v1/geocode/search?text=${dino.foundIn}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`)
    const data = await res.json()
    //console.log(data.features[0].properties.lat)
    let lat = data.features[0].properties.lat
    let lon = data.features[0].properties.lon
    setLatitude(lat)
    setLongitude(lon)
    setLoading(false);
    }
}
    //console.log(longitude)
    //console.log(latitude)
    getDinoCoordinate()
}, [dino]);


const dinoMap: string = `https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&&width=400&height=300&center=lonlat:${longitude},${latitude}&zoom=3&marker=lonlat:${longitude},${latitude};type:material;color:red;icontype:awesome&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
return (
    <main>
         <NavBar />
    <div className="container">
    {dino.imageSrc !== 'N/A' && 
     <div key={dino.name}>
    <h2 className={classes.DinoPageTitle}>{dino.name}</h2>
    <div className={classes.DinoMainImgContainer}>
    <img src={dino.imageSrc} className={classes.DinoMainImg}/>   
    </div>     
    <p>{dino.description}</p>

    </div>}

    <div className={classes.DinoPageContainer}>
     {loading ? 
     <div className={classes.loading}>
     <RotatingLines
     strokeColor="grey"
     strokeWidth="4"
     animationDuration="3"
     width="50"
     visible={true}
   /> </div>: 
   <div>
    <iframe
    width="400"
    height="300"
    src={dinoMap}
    >
    </iframe>
    </div>
}
    </div>
    </div>    
</main>
  );
}

