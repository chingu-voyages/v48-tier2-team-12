import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles';
import { DinoCardGrid } from '../components/DinoCardGrid';
import DinosaurOfTheDay from '../components/DinosaurOfTheDay.tsx';
import Search from '../components/Search.tsx';
import { NewsCardGrid } from '../components/NewsCardGrid.tsx';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import { altPics } from '../utils/pretty-pics.tsx';
import tRexSkull from '../assets/t-rex-skull.svg';
import styles from '../css-modules/Home.module.css';

export default function Home() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [originalDinos, setOriginalDinos] = useState<Dino[]>([]);

  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setDinos(originalDinos.filter((dino) => filterFunction(dino)));
  };

  useEffect(() => {
    fetchDinos().then((data) => {
      data.map((item) => {
        altPics.forEach((element) => {
          //for rendering small imgs on the grid when available:
          element.smallImg && item.id === element.id
            ? (item.imageSrc = element.smallImg)
            : '';
        });
      });
      setOriginalDinos(data);
      setDinos(data);
    });
  }, []);

  return (
    <>
      <main className="container">
        <div className={styles.homeTitleFlexbox}>
          <img src={tRexSkull} />
          <h2 className={styles.homeTitle}>
            Which dino do you want to learn about?
          </h2>
        </div>
        {originalDinos === dinos && <Search />}
        <CategoryTiles filterDinos={filterDinos} />
        {originalDinos === dinos && <DinosaurOfTheDay />}
        {originalDinos === dinos && <NewsCardGrid />}
        <DinoCardGrid dinos={dinos} title="Discover" />
      </main>
    </>
  );
}
