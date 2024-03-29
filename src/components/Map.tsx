import { RotatingLines } from "react-loader-spinner";
import styles from "../css-modules/DinoPage.module.css";
import { useEffect, useState } from "react";

export default function Map(props: {
  firstCountry: string; secondCountry: string
}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  //coordinates
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  
  const [secondlatitude, setSecondLatitude] = useState<number>();
  const [secondlongitude, setSecondLongitude] = useState<number>();

  const [boxOne, setBoxOne] = useState<number>();
  const [boxTwo, setBoxTwo] = useState<number>();
  const [boxThree, setBoxThree] = useState<number>();
  const [boxFour, setBoxFour] = useState<number>();

  //fetching first country coordinate
  useEffect(() => {
    const getDinoCoordinate = async () => {
      if (props.firstCountry != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${props.firstCountry}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        setLatitude(data.features[0].properties.lat);
        setLongitude(data.features[0].properties.lon);
        const [boxOne, boxTwo, boxThree, boxFour] = data.features[0].bbox;
        
        setBoxOne(boxOne)
        setBoxTwo(boxTwo)
        setBoxThree(boxThree)
        setBoxFour(boxFour)
        dinoMap && setLoading(false)
      }
    };
    getDinoCoordinate();
  }, [props.firstCountry]);

  //fetching second country coordinate
  useEffect(() => {
    const getSecondDinoCoordinate = async () => {
      if (props.secondCountry != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${props.secondCountry}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        setSecondLatitude(data.features[0].properties.lat);
        setSecondLongitude(data.features[0].properties.lon);
        dinoMap && setLoading(false)
      }
    };
    getSecondDinoCoordinate();
    
  }, [props.secondCountry]);

  const dinoMap: string = 
`https://maps.geoapify.com/v1/staticmap?
style=osm-bright-grey
&area=rect:${boxOne},${boxTwo},${boxThree},${boxFour}
&marker=lonlat:${longitude},${latitude};type:material;color:red;icontype:awesome
${secondlatitude?
`&marker=lonlat:${secondlongitude},${secondlatitude};type:material;color:red;icontype:awesome`:
""}
&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`;

  return (
    <div className={styles.DinoPageContainer}>
      {loading ? (
        <div className={styles.loading}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="3"
            width="50"
            visible={true}
          />{" "}
        </div>
      ) : (
        <div className={styles.mapFrame} >
          <img
            className={styles.mapImg}
            src={dinoMap}
            alt="location map" 
          />
        </div>
      )}
    </div>
  );
}
