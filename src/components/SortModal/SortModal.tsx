import "../../css-modules/SortModal.css";
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
        <div className="modal-overlay" onClick={props.toggleModalVisibility}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <h1>Order by</h1>
            <form action="" className="form-control">
              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Weight: Low to High"
                value="1"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Weight: High to Low"
                value="2"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Length: Low to High"
                value="3"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Length: High to Low"
                value="4"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Name A-Z"
                value="5"
              />

              <RadioButton
                toggleModalVisibility={props.toggleModalVisibility}
                currentSortCriteria={props.currentSortCriteria}
                handleSortChange={props.handleSortChange}
                label="Name Z-A"
                value="6"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
