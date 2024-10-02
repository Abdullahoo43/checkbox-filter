// import { State } from "../../types";
import Checkbox from "../checkbox/checkbox";
import "./base-dropdown.css";

const BaseDropdown = (props: {
  labels: string[];
  handleSelectedOptions?: (isCheck: boolean, label: string) => void;
  selectedOptions?: string[];
}) => {
  const { labels, handleSelectedOptions, selectedOptions } = props;

  return (
    <div className="dropdown">
      <Checkbox
        isCheck={
          selectedOptions ? selectedOptions.length === labels.length : false
        }
        label={"All"}
        handleSelectedStates={handleSelectedOptions}
      />
      {labels.map((label: string) => {
        return (
          <Checkbox
            isCheck={selectedOptions ? selectedOptions.includes(label) : false}
            label={label}
            handleSelectedStates={handleSelectedOptions}
          />
        );
      })}
    </div>
  );
};

export default BaseDropdown;
