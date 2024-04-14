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


  // const sortDinos =  (n: string) => {

  // } 

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
        {dinos.sort()
        .map((dino, index) => (
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