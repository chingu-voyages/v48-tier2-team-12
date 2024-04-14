import { useLocation } from 'react-router-dom';
import tRexSkull from '../assets/t-rex-skull.svg';
import styles from '../css-modules/DinoFacts.module.css';

const dinoFacts = [
  'Did you know that the word “dinosaur” means “terrible lizard” in Greek?',
  'Did you know that some dinosaurs, like the Velociraptor, were covered in feathers?',
  'Did you know that the dinosaurs ruled Earth for over 160 million years?',
  'Did you know that modern birds are direct descendants of dinosaurs?',
  'Did you know that Triceratops had three horns and a frill?',
  'Did you know that Stegosaurus had plates on it’s back?',
  'Did you know that the Argentinosaurus, the largest dinosaur, weighed as much as 10 elephants?',
  'Did you know that some dinosaurs like the Microraptor were as small as chickens?',
  'Did you know that dinosaur fossils have been found on every continent, including Antarctica?',
  'Did you know that the fastest dinosaur, the Ornithomimus, could sprint at speeds of up to 64 km/h?',
  'Did you know that some dinosaurs, like the Stegosaurus, had brains the size of walnuts?',
];

const DinoFacts = () => {
  const { pathname } = useLocation();

  return (
    <div className={`container`}>
      <div className={`${styles.dinoFactsContainer}`}>
        <img src={tRexSkull} />
        {pathname === '/' ? (
          <h2 className={styles.fact}>
            Which dino do you want to learn about?
          </h2>
        ) : (
          <h2 className={styles.fact}>
            {dinoFacts[Math.floor(Math.random() * dinoFacts.length)]}
          </h2>
        )}
      </div>
    </div>
  );
};
export default DinoFacts;
