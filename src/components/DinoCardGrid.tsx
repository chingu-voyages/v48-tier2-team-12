import { useState } from "react";
import { DinoCard } from "./DinoCard";
import classes from "../css-modules/DinoCardGrid.module.css";
import { Dino } from "../interfaces/dino.interface";
import emptyStateImg from "../assets/no-image.svg";
import { SortModal } from "./SortModal/SortModal";
import { useModal } from "../utils/useModal";

export function DinoCardGrid({
  dinos,
  title,
}: {
  dinos: Dino[];
  title: string;
}) {
  const { isOpen, toggle } = useModal(); // using a custom Hook - on /utils
  const [currentSortCriteria, setCurrentSortCriteria] = useState<string>("5");

  const handleSortChange = (n: string) => {
    setCurrentSortCriteria(n);
  };

  const sortFunction = (d1: Dino, d2: Dino) => {
    switch (currentSortCriteria) {
      case "1": {
        // Weight: Low to High
        if (d1.weight && d2.weight && d1.weight > d2.weight) return 1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return -1;
        return 0;
        break;
      }

      case "2": {
        // Weight: High to Low
        if (d1.weight && d2.weight && d1.weight > d2.weight) return -1;
        if (d1.weight && d2.weight && d1.weight < d2.weight) return 1;
        break;
      }
      case "3": {
        // Length: Low to Hight
        if (d1.length && d2.length && d1.length > d2.length) return 1;
        if (d1.length && d2.length && d1.length < d2.length) return -1;
        break;
      }
      case "4": {
        // Length: High to Low
        if (d1.length && d2.length && d1.length > d2.length) return -1;
        if (d1.length && d2.length && d1.length < d2.length) return 1;
        break;
      }
      case "6": {
        // Name: Z-A
        if (d1.name && d2.name && d1.name > d2.name) return -1;
        if (d1.name && d2.name && d1.name < d2.name) return 1;
        return 0;
        break;
      }
      default: {
        // by default order by Name Ascending ( Order Criteria = 5 --> Name: A-Z)
        if (d1.name && d2.name && d1.name > d2.name) return 1;
        if (d1.name && d2.name && d1.name < d2.name) return -1;
        return 0;
        break;
      }
    }
  };

  return (
    <>
      <h2 className={classes.smallCardGridTitle}>{title}</h2>

      <button onClick={toggle}>Sort by: {currentSortCriteria}</button>
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
