import "./filter-block.css";

// import { ProjectType, State, Svg } from "../../types";
import BaseDropdown from "../base-dropdown/base-dropdown";
import { useState, useEffect, useRef } from "react";

import FilterBlockHead from "../filter-block-head/filter-block-head";

const FilterBlock = (props: {
  value: string;
  selectedOptionsToDisplay?: string;

  labels: string[];
  handleSelectedOptions?: (isCheck: boolean, label: string) => void;
  selectedOptions?: string[];
}) => {
  const {
    value,
    selectedOptionsToDisplay,
    labels,
    handleSelectedOptions,
    selectedOptions,
  } = props;

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClickHandler = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-block" ref={dropdownRef}>
      <FilterBlockHead
        value={value}
        selectedOptionsToDisplay={selectedOptionsToDisplay}
        onClickHandler={onClickHandler}
      />
      {isDropdownOpen ? (
        <BaseDropdown
          labels={labels}
          handleSelectedOptions={handleSelectedOptions}
          selectedOptions={selectedOptions}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterBlock;
