import {useEffect, useState} from "react";
import {fetchDinos} from "../utils/api.ts";
import {Dino} from "../interfaces/dino.interface.ts";
import styles from '../css-modules/DinosaurOfTheDay.module.css'
import { Link } from "react-router-dom";
import { altPics } from "../utils/pretty-pics.tsx";

export default function DinosaurOfTheDay() {

    const [dinoOfTheDay, setDinoOfTheDay] = useState<Dino>(Object);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLearnMoreVisible, setIsLearnMoreVisible] = useState(false);

    useEffect(() => {
        const fetchDinoOfTheDay = async () => {
            const allDinos = await fetchDinos();
            // Mapping and replacing images
            allDinos.map(item => {
                altPics.forEach(element => {
                  item.id === element.id ? item.imageSrc = element.img : ""
                });
            })

            let dinoOfTheDay: Dino|null = null;
            while (!dinoOfTheDay) {

                const randomIndex = Math.floor(Math.random() * allDinos.length)

                // Checking for dinos with image and description
                if (allDinos[randomIndex].imageSrc !== 'N/A' && 
                allDinos[randomIndex].description !== 'N/A') {
                    dinoOfTheDay = allDinos[randomIndex]
                }
            }
            setDinoOfTheDay(dinoOfTheDay)
            setIsLearnMoreVisible(dinoOfTheDay.description.length > 95)
        };

        fetchDinoOfTheDay();

    }, []);

    const toggleExpand = () => setIsExpanded(prevExpanded => !prevExpanded)

    return (
        <div className={styles['dino-of-the-day']}>
            <h1 className={styles['dino-of-the-day__heading']}>Dinosaur of the day</h1>

            <Link 
                to={`/dino/${dinoOfTheDay.id}`} 
                className={styles['dino-of-the-day__card']}>

                    {/* Image */}
                    <img src={dinoOfTheDay.imageSrc} 
                        className={styles['dino-of-the-day__image']} 
                        alt={`an image of ${dinoOfTheDay.name}`}/>

                    {/* Info */}
                    <div className={styles['dino-of-the-day__text']}>
                        <h2 className={styles['dino-of-the-day__title']}
                        >{dinoOfTheDay.name}
                        </h2>
                        <p  className={`
                            ${styles['dino-of-the-day__description']} 
                            ${isExpanded ? 
                            styles['expanded'] : 
                            styles['collapsed']
                            }`}
                        >
                            {dinoOfTheDay.description}
                        </p>
                        {isLearnMoreVisible && <button 
                            className={styles['learn-more__btn']} 
                            onClick={toggleExpand}>
                                {isExpanded ? 
                                'Show Less' : 
                                'Learn More'}
                        </button>}
                    </div>
            </Link>
        </div>
    )
}
