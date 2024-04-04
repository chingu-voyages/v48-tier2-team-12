import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Dino } from '../interfaces/dino.interface.ts';
import { fetchSingleDino } from '../utils/api.ts';
import Map from '../components/Map';
import styles from '../css-modules/DinoPage.module.css';
import emptyStateImg from '../assets/no-image.svg';

export default function DinoPage() {
  const { id } = useParams();
  const [dino, setDino] = useState<Dino>(Object);

  useEffect(() => {
    const fetchDinoPage = async () => {
      const singleDino = await fetchSingleDino(id);

      setDino(singleDino);
    };
    fetchDinoPage();
  }, [id]);

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
            <span className={styles.boldCatTitle}>Type of Dinosaur:</span>
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

          <div className={styles.descriptionBox}>
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

          <div className={styles.descriptionBox}>
            <p className={styles.boldCatTitle}>Description:</p>
            <p className={styles.description}>{dino.description}</p>
          </div>
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
