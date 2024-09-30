import { useEffect, useRef, useState } from "react";
import FilterBlockHead from "../filter-block-head/filter-block-head";
import "./range-slider.css";

const RangeSlider = (props: {
  minValue: number;
  handleMinChange: (e: any) => void;
  maxValue: number;
  handleMaxChange: (e: any) => void;
}) => {
  const { minValue, handleMinChange, maxValue, handleMaxChange } = props;

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
        value={"Total kW DC: "}
        selectedOptionsToDisplay={`${minValue} >= ${maxValue}`}
        onClickHandler={onClickHandler}
      />
      {isDropdownOpen ? (
        <div className="dropdown container">
          <div className="slider-container">
            <div className="range-slider-container">
              <input
                type="range"
                min="0"
                max="5000"
                value={minValue}
                onChange={handleMinChange}
              />
              <input
                type="range"
                min="0"
                max="5000"
                value={maxValue}
                onChange={handleMaxChange}
              />
              <div
                style={{
                  height: "6px",
                  backgroundColor: "rgba(186, 215, 57, 1)",
                  width: `${((maxValue - minValue) / 5000) * 100}%`,
                  position: "absolute",
                  left: `${(minValue / 5000) * 100}%`,
                }}
              ></div>
            </div>
            <div className="display-range">
              <div className="values-container">
                <p className="value-title">Min</p>
                <p className="values">{minValue}</p>
              </div>
              <span> &#8212; </span>
              <div className="values-container">
                <p className="value-title">Max</p>
                <p className="values">{maxValue}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RangeSlider;
