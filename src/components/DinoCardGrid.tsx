import { useEffect, useState } from 'react';
import { DinoCard } from './DinoCard';
import classes from '../css-modules/DinoCardGrid.module.css';
import { Dino } from '../interfaces/dino.interface';
import emptyStateImg from '../assets/no-image.svg';
import { SortModal } from './SortModal/SortModal';
import { useModal } from '../utils/useModal';
import sort from '../assets/sort.svg';

export function DinoCardGrid({
  dinos,
  title,
}: {
  dinos: Dino[];
  title: string;
}) {
  // SORT
  const { isOpen, toggle } = useModal();
  const [currentSortCriteria, setCurrentSortCriteria] =
    useState<string>('Name: A-Z');
  const handleSortChange = (n: string) => {
    setCurrentSortCriteria(n);
  };
  const sortFunction = (d1: Dino, d2: Dino): number => {
    switch (currentSortCriteria) {
      case 'Weight: Low to High': {
        // Weight: Low to High
        if (d1.weight && d2.weight && d1.weight > d2.weight) return 1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return -1;
        break;
      }
      //not working properly
      case 'Weight: High to Low': {
        // Weight: High to Low
        if (d1.weight && d2.weight && d1.weight > d2.weight) return -1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return 1;
        break;
      }
      //not working properly
      case 'Length: Low to High': {
        // Length: Low to High
        if (d1.length && d2.length && d1.length > d2.length) return 1;
        if (d1.length && d2.length && d1.length < d2.length) return -1;
        return 0;
        break;
      }
      case 'Length: High to Low': {
        // Length: High to Low
        if (d1.length && d2.length && d1.length > d2.length) return -1;
        if (d1.length && d2.length && d1.length < d2.length) return 1;
        return 0;
        break;
      }
      case 'Name: A-Z': {
        // by default order by Name Ascending ( Order Criteria = 5 --> Name: A-Z)
        if (d1.name && d2.name && d1.name > d2.name) return 1;
        if (d1.name && d2.name && d1.name < d2.name) return -1;
        return 0;
        break;
      }
      case 'Name: Z-A': {
        // Name: Z-A
        if (d1.name && d2.name && d1.name > d2.name) return -1;
        if (d1.name && d2.name && d1.name < d2.name) return 1;
        return 0;
        break;
      }
      default: {
        console.log('error');
      }
    }
    //This function needed a default return statement
    return 0;
  };

  // Lazy Loading
  const [isLoading, setIsLoading] = useState(false);
  const [loadIndex, setLoadIndex] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setLoadIndex((prevIndex) => prevIndex + 20);
        }, 500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadIndex, dinos]);

  return (
    <>
      <div className={classes.smallCardGridTitleContainer}>
        <h2 className={classes.smallCardGridTitle}>{title}</h2>
        <button className={classes.sortBtn} onClick={toggle}>
          <img src={sort} alt="Sort icon" />
          Sort by: {currentSortCriteria}
        </button>
      </div>

      <SortModal
        isOpen={isOpen}
        toggleModalVisibility={toggle}
        currentSortCriteria={currentSortCriteria}
        handleSortChange={handleSortChange}
      />

      <div className={classes.smallCardGrid}>
        {dinos
          .sort(sortFunction)
          .slice(0, loadIndex)
          .map((dino) => (
            <DinoCard
              key={dino.id}
              {...dino}
              imageSrc={dino.imageSrc === 'N/A' ? emptyStateImg : dino.imageSrc}
            />
          ))}
      </div>
      <p className="loading-text">
        {dinos.slice(0, loadIndex).length < dinos.length &&
          isLoading &&
          'Loading...'}
      </p>
    </>
  );
}
