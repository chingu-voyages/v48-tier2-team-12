import { useState } from "react";
import { DinoCard } from "./DinoCard";
import classes from "../css-modules/DinoCardGrid.module.css";
import { Dino } from "../interfaces/dino.interface";
import emptyStateImg from "../assets/no-image.svg";
import { SortModal } from "./SortModal/SortModal";
import { useModal } from "../utils/useModal";
import sort from "../assets/sort.svg";

export function DinoCardGrid({
  dinos,
  title,
}: {
  dinos: Dino[];
  title: string;
}) {
  const { isOpen, toggle } = useModal(); // using a custom Hook - on /utils
  const [currentSortCriteria, setCurrentSortCriteria] = useState<string>("Name: A-Z");

  const handleSortChange = (n: string) => {
    setCurrentSortCriteria(n);
  };

  const sortFunction = (d1: Dino, d2: Dino) :number => {
    switch (currentSortCriteria) {
      case "Weight: Low to High": {
        // Weight: Low to High
        if (d1.weight && d2.weight && d1.weight > d2.weight) return 1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return -1;
        return 0;
        break;
      }
      //not working properly
      case "Weight: High to Low": {
        // Weight: High to Low
        if (d1.weight && d2.weight && d1.weight > d2.weight) return -1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return 1;
        break;
      }
      //not working properly
      case "Length: Low to High": {
        // Length: Low to Hight
        if (d1.length && d2.length && d1.length > d2.length) return 1;
        if (d1.length && d2.length && d1.length < d2.length) return -1;
        break;
      }
      case "Length: High to Low": {
        // Length: High to Low
        if (d1.length && d2.length && d1.length > d2.length) return -1;
        if (d1.length && d2.length && d1.length < d2.length) return 1;
        break;
      }
      case "Name: A-Z": {
        // by default order by Name Ascending ( Order Criteria = 5 --> Name: A-Z)
        if (d1.name && d2.name && d1.name > d2.name) return 1;
        if (d1.name && d2.name && d1.name < d2.name) return -1;
        return 0;
        break;
      }
      case "Name: Z-A": {
        // Name: Z-A
        if (d1.name && d2.name && d1.name > d2.name) return -1;
        if (d1.name && d2.name && d1.name < d2.name) return 1;
        return 0;
        break;
      }
      default: {
        console.log('error')
      }
    } 
    //This function needed a default return statement
    return 0
  };

  return (
    <>
      <div className={classes.smallCardGridTitleContainer}>
        <h2 className={classes.smallCardGridTitle}>{title}</h2>
        <button 
        className={classes.sortBtn}
        onClick={toggle}>
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
        {dinos.sort(sortFunction).map((dino, index) => (
          <DinoCard
            key={index}
            id={dino.id}
            imageSrc={dino.imageSrc === "N/A" ? emptyStateImg : dino.imageSrc}
            name={dino.name}
            description=""
            foundIn=""
            length={dino.length}
            weight={dino.weight}
          />
        ))}
      </div>
    </>
  );
}
