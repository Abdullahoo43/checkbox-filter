import { useEffect, useRef, useState } from "react";
import FilterBlockHead from "../filter-block-head/filter-block-head";
import StageDropdown from "../stage-dropdown/stage-dropdown";

const FilterBlockStage = (props: {
  value: string;
  selectedOptionsToDisplay?: string;
  activeLabels: string[];
  inActiveLabels: string[];
  handleSelectedActiveStages?: (isCheck: boolean, label: string) => void;
  selectedActiveStages?: string[];
  handleSelectedInActiveStages: (isCheck: boolean, label: string) => void;
  selectedInActiveStages: string[];
}) => {
  const {
    value,
    selectedOptionsToDisplay,
    activeLabels,
    inActiveLabels,
    handleSelectedActiveStages,
    selectedActiveStages,
    handleSelectedInActiveStages,
    selectedInActiveStages,
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
        <StageDropdown
          activeLabels={activeLabels}
          inActiveLabels={inActiveLabels}
          handleSelectedActiveStages={handleSelectedActiveStages}
          selectedActiveStages={selectedActiveStages}
          handleSelectedInActiveStages={handleSelectedInActiveStages}
          selectedInActiveStages={selectedInActiveStages}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterBlockStage;
