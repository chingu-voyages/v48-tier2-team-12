import { ChangeEvent } from "react";

interface RadioButtonProps {
  toggleModalVisibility: () => void;
  currentSortCriteria: string;
  handleSortChange: (option: string) => void;
  label: string;
  value: string;
}

export function RadioButton(props: RadioButtonProps) {
  const setOptionSelection = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Selected Option(RadioButton.tsx): ", e.target.value);

    props.handleSortChange(e.target.value);
  };

  const handleClick = () => {
    props.toggleModalVisibility();
    props.handleSortChange("1");
  };

  const elementId = "sortOption_" + props.value;

  return (
    <>
      <label htmlFor={elementId} className="form-control">
        {props.label}
      </label>
      <input
        type="radio"
        id={elementId}
        name="sortOptions"
        value={props.value}
        checked={props.currentSortCriteria === props.value}
        onClick={handleClick}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOptionSelection(e)
        }
      />
    </>
  );
}
