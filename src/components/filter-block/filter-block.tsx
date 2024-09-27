import "./filter-block.css";

import { ReactComponent as DropdownSvg } from "../../assets/angle-down.svg";
import { ReactComponent as AllFiltersSvg } from "../../assets/instant_mix.svg";

import { Svg } from "../../types";
import BaseDropdown from "../base-dropdown/base-dropdown";
import { useState, useEffect, useRef } from "react";

const FilterBlock = (props: { value: string; svg: Svg; labels?: string[] }) => {
  const { value, svg, labels } = props;

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
      <div className="filter-head" onClick={onClickHandler}>
        {svg === Svg.ALL_FILTERS ? <AllFiltersSvg /> : <></>}
        <p>{value}</p>
        {svg === Svg.DROPDOWN ? <DropdownSvg /> : <></>}
      </div>
      {labels && isDropdownOpen ? <BaseDropdown labels={labels} /> : <></>}
    </div>
  );
};

export default FilterBlock;
