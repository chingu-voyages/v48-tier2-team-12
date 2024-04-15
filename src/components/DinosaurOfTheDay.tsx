import { useEffect, useState } from 'react';
import { fetchDinos } from '../utils/api.ts';
import { now, isTimeToFetch } from '../utils/news-api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import styles from '../css-modules/DinosaurOfTheDay.module.css';
import { Link } from 'react-router-dom';

export default function DinosaurOfTheDay() {
  //Should figure out what's wrong with dinoOfTheDay initial state (Object)
  const [dinoOfTheDay, setDinoOfTheDay] = useState<Dino>(Object);
  const [isEllipsisVisible, setEllipsisVisible] = useState(false);
  const [descCharNumber, setDescCharNumber] = useState(Number)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const adaptDescCharNumber = (): void => {
    if (windowWidth < 550) {
      setDescCharNumber(88);
    }
    else if (windowWidth <= 1024) {
      setDescCharNumber(650);
    }
    else if (windowWidth > 1024){
      setDescCharNumber(99999);
    }
  };
  
  const isDescTruncated = (descLength: number) => {
    return descLength > descCharNumber &&
    windowWidth < 1024
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      adaptDescCharNumber();
      setEllipsisVisible(
        isDescTruncated(dinoOfTheDay.description?.length)
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const fetchDinoOfTheDay = async () => {
      if (isTimeToFetch('dinopediaTodaysDinoTimestamp')) { // If it's time to fetch
        const allDinos = await fetchDinos();

        let dinoOfTheDay: Dino | null = null;
        let attempts = 0;

        while (!dinoOfTheDay && attempts < allDinos.length) {
          const randomIndex = Math.floor(Math.random() * allDinos.length);

          // Checking for dinos with image and description
          if (
            !allDinos[randomIndex].imageSrc?.includes(
              "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction"
            )&&
            allDinos[randomIndex].imageSrc !== 'N/A' &&
            allDinos[randomIndex].description !== 'N/A'
          ) {
            dinoOfTheDay = allDinos[randomIndex]
          }
          attempts++
        }

        if(dinoOfTheDay){
          localStorage.setItem("dinoOfTheDay", JSON.stringify(dinoOfTheDay));
          localStorage.setItem('dinopediaTodaysDinoTimestamp', now.toString());
          setDinoOfTheDay(dinoOfTheDay);
          adaptDescCharNumber()
          setEllipsisVisible(
            isDescTruncated(dinoOfTheDay.description?.length)
          );
        }
      };
    }
    fetchDinoOfTheDay();

    const storedDino = localStorage.getItem('dinoOfTheDay');
    if (storedDino) {
      setDinoOfTheDay(JSON.parse(storedDino));
      adaptDescCharNumber()
      setEllipsisVisible(
        isDescTruncated(dinoOfTheDay.description?.length)
      );
    }
  }, []);
  return (
    <div className={styles['dino-of-the-day']}>
      <h1 className={styles['dino-of-the-day__heading']}>
        Dinosaur of the day
      </h1>

      <Link
        to={`/dino/${dinoOfTheDay.id}`}
        className={styles['dino-of-the-day__card']}
      >
        {/* Image */}
        <img
          src={dinoOfTheDay.imageSrc}
          className={styles['dino-of-the-day__image']}
          alt={`an image of ${dinoOfTheDay.name}`}
        />

        {/* Info */}
        <div className={styles['dino-of-the-day__text']}>
          <h2 className={styles['dino-of-the-day__title']}>
            {dinoOfTheDay.name}
          </h2>
          <div className={styles['dino-of-the-day__description-container']} >
            <p className={styles['dino-of-the-day__description']}
              dangerouslySetInnerHTML={{
                __html: dinoOfTheDay.description
                  ?.replace(/\. /g, ". <span class='lineBreak'></span>")
                  .split('.')
                  .join('. ')
                  .slice(0, descCharNumber)
              }} />
              <span >{isEllipsisVisible ? '...' : ''}</span>
          </div>
          <button
            className={styles['learn-more__btn']}
          >
            Learn More
          </button>
        </div>
      </Link>
    </div>
  );
}
