import { RotatingLines } from "react-loader-spinner";
import styles from "../css-modules/DinoPage.module.css";
import { useEffect, useState } from "react";

export default function Map(props: {country: string}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [boxOne, setBoxOne] = useState<number>();
  const [boxTwo, setBoxTwo] = useState<number>();
  const [boxThree, setBoxThree] = useState<number>();
  const [boxFour, setBoxFour] = useState<number>();

  useEffect(() => {
    const getDinoCoordinate = async () => {
      if (props.country != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${props.country}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        setLatitude(data.features[0].properties.lat);
        setLongitude(data.features[0].properties.lon);
        const [boxOne, boxTwo, boxThree, boxFour] = data.features[0].bbox;
        setLoading(false);
        setBoxOne(boxOne)
        setBoxTwo(boxTwo)
        setBoxThree(boxThree)
        setBoxFour(boxFour)
      }
    };
    getDinoCoordinate();
  }, [props.country]);
  
  //klokantech-basic, width=400&height300& &zoom=3
  //toner-grey
  //&center=lonlat:${longitude},${latitude}&zoom=4

  const dinoMap: string = 
  `https://maps.geoapify.com/v1/staticmap?style=osm-bright-grey&area=rect:${boxOne},${boxTwo},${boxThree},${boxFour}&marker=lonlat:
${longitude},${latitude};type:material;color:red;icontype:awesome&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`;
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
          {/* <iframe width="400"
                  height="300"
                  src={dinoMap}>
          </iframe> */}
          <img
            className={styles.mapImg}
            src={dinoMap}
            alt="location map" />
        </div>
      )}
    </div>
  );
}
