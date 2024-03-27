import { RotatingLines } from "react-loader-spinner";
import classes from "../css-modules/DinoPage.module.css";
import { useEffect, useState } from "react";

export function Map(foundIn) {
  const [loading, setLoading] = useState(true);

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    const getDinoCoordinate = async () => {
      if (foundIn != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${foundIn}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        //console.log(data.features[0].properties.lat)
        let lat = data.features[0].properties.lat;
        let lon = data.features[0].properties.lon;
        setLatitude(lat);
        setLongitude(lon);
        setLoading(false);
      }
    };
    getDinoCoordinate();
  }, [foundIn]);

  const dinoMap: string = `https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&&width=400&height=300&center=lonlat:${longitude},${latitude}&zoom=3&marker=lonlat:${longitude},${latitude};type:material;color:red;icontype:awesome&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`;

  return (
    <div className={classes.DinoPageContainer}>
      {loading ? (
        <div className={classes.loading}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="3"
            width="50"
            visible={true}
          />{" "}
        </div>
      ) : (
        <div>
          <iframe width="400" height="300" src={dinoMap}></iframe>
        </div>
      )}
    </div>
  );
}
