import { ReactComponent as DropdownSvg } from "../../assets/angle-down.svg";

import "./filter-block-head.css";

const FilterBlockHead = (props: {
  value: string;
  selectedOptionsToDisplay?: string;
  onClickHandler: () => void;
}) => {
  const { value, selectedOptionsToDisplay, onClickHandler } = props;
  return (
    <div className="filter-head" onClick={onClickHandler}>
      <p>
        {value}
        <span className="selected-options">
          {selectedOptionsToDisplay ? selectedOptionsToDisplay : ""}
        </span>
      </p>
      <DropdownSvg />
    </div>
  );
};

export default FilterBlockHead;
