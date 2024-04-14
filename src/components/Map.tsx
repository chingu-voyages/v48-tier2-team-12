import { RotatingLines } from 'react-loader-spinner';
import styles from '../css-modules/DinoPage.module.css';
import { useEffect, useState } from 'react';

export default function Map(props: {
  firstCountry: string | undefined;
  secondCountry: string | undefined;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    const getDinoCoordinates = async () => {
      setIsLoading(true);
      if (props.firstCountry != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${props.firstCountry}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        setLatitude(data.features[0].properties.lat);
        setLongitude(data.features[0].properties.lon);
        const [boxOne, boxTwo, boxThree, boxFour] = data.features[0].bbox;

        setBoxOne(boxOne);
        setBoxTwo(boxTwo);
        setBoxThree(boxThree);
        setBoxFour(boxFour);
      }

      if (props.secondCountry != undefined) {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${props.secondCountry}&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`
        );
        const data = await res.json();
        setSecondLatitude(data.features[0].properties.lat);
        setSecondLongitude(data.features[0].properties.lon);
      }
      setIsLoading(false);
    };

    getDinoCoordinates();
  }, [props.firstCountry, props.secondCountry]);

  const dinoMap: string = `https://maps.geoapify.com/v1/staticmap?
style=osm-bright-grey
&area=rect:${boxOne},${boxTwo},${boxThree},${boxFour}
&marker=lonlat:${longitude},${latitude};type:material;color:red;icontype:awesome
${
  secondlatitude
    ? `&marker=lonlat:${secondlongitude},${secondlatitude};type:material;color:red;icontype:awesome`
    : ''
}
&apiKey=bd4b266f35c6485b9871b1e4d7ce670d`;

  return (
    <div className={styles.DinoPageContainer}>
      {isLoading ? (
        <div className={styles.loading}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="4"
            animationDuration="3"
            width="50"
            visible={true}
          />
        </div>
      ) : (
        <div className={styles.mapFrame}>
          <img className={styles.mapImage} src={dinoMap} alt="Location" />
        </div>
      )}
    </div>
  );
}
