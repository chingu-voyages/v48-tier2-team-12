import styles from "../../css-modules/SortModal.module.css";
import { RadioButton } from "./RadioButton";

interface ModalProps {
  isOpen: boolean;
  toggleModalVisibility: () => void;
  currentSortCriteria: string;
  handleSortChange: (n: string) => void;
}

export function SortModal(props: ModalProps) {
  return (
    <>
      {props.isOpen && (
        <div className={styles["modal-overlay"]} onClick={props.toggleModalVisibility}>
          <div onClick={(e) => e.stopPropagation()} className={styles["modal-box"]}>
            <div className={styles.grayLine}></div>
            <h3 className={styles.sortTitle}>Sort by</h3>
            <form action="" className={styles["form-controls"]} >
              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Weight: Low to High"
                value="Weight: Low to High"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Weight: High to Low"
                value="Weight: High to Low"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Length: Low to High"
                value="Length: Low to High"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Length: High to Low"
                value="Length: High to Low"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Name: A-Z"
                value="Name: A-Z"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Name: Z-A"
                value="Name: Z-A"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
