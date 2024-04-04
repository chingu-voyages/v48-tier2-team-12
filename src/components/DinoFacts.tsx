import { useLocation } from 'react-router-dom';
import tRexSkull from '../assets/t-rex-skull.svg';
import styles from '../css-modules/DinoFacts.module.css';

const dinoFacts = [
  'Did you know that the word “dinosaur” means “terrible lizard” in Greek?',
  'Did you know that some dinosaurs, like the Velociraptor, were covered in feathers?',
  'Did you know that the smallest known dinosaur is the Microraptor?',
  'Did you know that the dinosaurs ruled Earth for over 160 million years?',
  'Did you know that birds are descended from dinosaurs?',
  'Did you know that Triceratops had three horns and a frill?',
  'Did you know that Stegosaurus had plates on it’s back?',
];

const DinoFacts = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.dinoFactsContainer}>
      <img src={tRexSkull} />
      {pathname === '/' ? (
        <h2>Which dino do you want to learn about?</h2>
      ) : (
        <h2>{dinoFacts[Math.floor(Math.random() * dinoFacts.length)]}</h2>
      )}
    </div>
  );
};
export default DinoFacts;
