import { useLoaderData } from 'react-router-dom';
import type { Dino } from '../interfaces/dino.interface.ts';
import { fetchSingleDino } from '../utils/api.ts';
import Map from '../components/Map';
import styles from '../css-modules/DinoPage.module.css';
import emptyStateImg from '../assets/no-image.svg';
import DinoPageInfo from '../components/DinoPageInfo.tsx';
import defaultDescription from '../utils/defaultDescription.ts';

export const loader = async ({ params }: any) => {
  try {
    const singleDino = await fetchSingleDino(params.id);
    return singleDino;
  } catch (error) {
    return { error: error, msg: 'There was an error.' };
  }
};

export default function DinoPage() {
  const {
    name,
    imageSrc,
    typeOfDinosaur,
    length,
    weight,
    diet,
    whenLived,
    foundIn,
    taxonomy,
    namedBy,
    typeSpecies,
    description,
    error,
  } = useLoaderData() as Dino;

  if (error)
    return (
      <main className={styles.errorContainer}>
        <div className={styles.error}>{error}</div>
      </main>
    );

  return (
    <main className="container">
      {/* TITLE */}
      <h2 className={styles.pageTitle}>{name}</h2>
      <div className={styles.upperDinoPage}>
        {/* IMAGE */}
        <img
          src={imageSrc === 'N/A' ? emptyStateImg : imageSrc}
          alt={
            imageSrc === 'N/A' ? 'No Image Discovered Yet' : `image of ${name}`
          }
          className={styles.dinoImage}
        />

        {/* INFO */}
        <div className={styles.infoContainer}>
          <DinoPageInfo
            title="Type of Dinosaur"
            value={typeOfDinosaur}
            capitalize
          />
          <DinoPageInfo
            title="Length"
            value={`${length} ${length !== 'N/A' ? ' Meters' : ''}`}
          />
          <DinoPageInfo
            title="Weight"
            value={`${weight} ${weight !== 'N/A' ? ' Kilograms' : ''}`}
          />
          <DinoPageInfo title="Diet" value={`${diet}`} capitalize />
          <DinoPageInfo title="Era" value={`${whenLived}`} />
          <DinoPageInfo title="Location" value={`${foundIn}`} />
          <DinoPageInfo title="Taxonomy" value={`${taxonomy}`} />
          <DinoPageInfo title="Named By" value={`${namedBy}`} />
          <DinoPageInfo
            title="Type of Species"
            value={`${typeSpecies}`}
            capitalize
          />
        </div>
      </div>

      <div className={styles.description}>
        <DinoPageInfo
          title="Description"
          value={`${description === 'N/A' ? defaultDescription : description}`}
        />
      </div>

      <Map
        firstCountry={foundIn?.split(', ')[0]}
        secondCountry={foundIn?.split(', ')[1]}
      />
    </main>
  );
}
