import { useLoaderData } from 'react-router-dom';
import type { Dino } from '../interfaces/dino.interface.ts';
import { fetchSingleDino } from '../utils/api.ts';
import Map from '../components/Map';
import styles from '../css-modules/DinoPage.module.css';
import emptyStateImg from '../assets/no-image.svg';

export const loader = async ({ params }: any) => {
  try {
    const singleDino = await fetchSingleDino(params.id);
    return singleDino;
  } catch (error) {
    return { error: error, msg: 'There was an error.' };
  }
};

export default function DinoPage() {
  const dino = useLoaderData() as Dino;

  if (dino.error)
    return (
      <main className={styles.errorContainer}>
        <div className={styles.error}>{dino.error}</div>
      </main>
    );

  return (
    <main className={styles.dinoContainer}>
      <div className="container">
        {/* TITLE */}
        <h2 className={styles.DinoPageTitle}>{dino.name}</h2>
        {/* IMAGE */}
        <img
          src={dino.imageSrc === 'N/A' ? emptyStateImg : dino.imageSrc}
          alt={
            dino.imageSrc === 'N/A'
              ? 'No Image Discovered Yet'
              : `image of ${dino.name}`
          }
          className={styles.DinoMainImg}
        />
        {dino.imageSrc === 'N/A' && (
          <p className={styles.noImageDesc}>No Image Discovered Yet</p>
        )}
        {/* INFO */}
        <div className={styles.info}>
          <p>
            <span className={styles.boldCatTitle}>Type of Dinosaur: </span>
            <span className={styles.capitalize}>{dino.typeOfDinosaur}</span>
          </p>
          <p>
            <span className={styles.boldCatTitle}>Length: </span>
            {dino.length}
            {dino.length !== 'N/A' && ' Meters'}
          </p>
          <p>
            <span className={styles.boldCatTitle}>Weight: </span>
            {dino.weight}
            {dino.weight !== 'N/A' && '  Kilograms'}
          </p>
          <p>
            <span className={styles.boldCatTitle}>Diet: </span>
            <span className={styles.capitalize}>{dino.diet}</span>
          </p>
          <p>
            <span className={styles.boldCatTitle}>Era: </span>
            {dino.whenLived}
          </p>
          <p>
            <span className={styles.boldCatTitle}>Location: </span>
            {dino.foundIn}
          </p>

          <div className={styles.taxonomyBox}>
            <p className={styles.boldCatTitle}>Taxonomy:</p>
            <p className={styles.description}>{dino.taxonomy}</p>
          </div>

          <p>
            <span className={styles.boldCatTitle}>Named By: </span>
            {dino.namedBy}
          </p>
          <p>
            <span className={styles.boldCatTitle}>Type of Species: </span>
            <span className={styles.capitalize}>{dino.typeSpecies}</span>
          </p>
        </div>
          <div className={styles.descriptionBox}>
            <p className={styles.boldCatTitle}>Description:</p>
            <p 
              className={styles.description}   
              dangerouslySetInnerHTML={{
                __html: dino.description
                  ?.replace(/\. /g, ". <p class='lineBreak'></p>")
                  .split('.')
                  .join('. ')
              }}>
            </p>
          </div>
        

        {/* MAP: Now sending both countries */}
        <Map
          firstCountry={dino.foundIn?.split(', ')[0]}
          secondCountry={dino.foundIn?.split(', ')[1]}
        />
      </div>
    </main>
  );
}
