import { useEffect, useRef, useState } from "react";
import FilterBlockHead from "../filter-block-head/filter-block-head";
import "./range-slider.css";

const RangeSlider = (props: {
  minValue: number;
  handleMinChange: (e: any) => void;
  maxValue: number;
  handleMaxChange: (e: any) => void;
  maxValFromProjects: number;
  minValFromProjects: number;
}) => {
  const {
    minValue,
    handleMinChange,
    maxValue,
    handleMaxChange,
    maxValFromProjects,
    minValFromProjects,
  } = props;

  const [tempMinVal, setTempMinVal] = useState(minValue);
  const [tempMaxVal, setTempMaxVal] = useState(maxValue);

  useEffect(() => {
    setTempMaxVal(maxValue);
    setTempMinVal(minValue);
  }, [maxValue, minValue]);

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

  const handleOnBlurMin = (e: any) => {
    if (tempMinVal > tempMaxVal) setTempMinVal(tempMaxVal);
    handleMinChange(e);
  };
  const handleOnBlurMax = (e: any) => {
    if (tempMaxVal < tempMinVal) setTempMaxVal(tempMinVal);
    handleMaxChange(e);
  };

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
                id="from-slider"
                type="range"
                min={minValFromProjects}
                max={maxValFromProjects}
                value={minValue}
                onChange={handleMinChange}
              />
              <input
                id="to-slider"
                type="range"
                min={minValFromProjects}
                max={maxValFromProjects}
                value={maxValue}
                onChange={handleMaxChange}
              />
              <div className="slider-track"></div>
              <div
                style={{
                  height: "6px",
                  backgroundColor: "rgba(186, 215, 57, 1)",
                  position: "absolute",
                  right: `${Math.max(
                    ((maxValFromProjects - maxValue) /
                      (maxValFromProjects - minValFromProjects)) *
                      100,
                    0
                  )}%`,
                  left: `${Math.max(
                    ((minValue - minValFromProjects) /
                      (maxValFromProjects - minValFromProjects)) *
                      100,
                    0
                  )}%`,
                }}
              ></div>
            </div>
            <div className="display-range">
              <div className="values-container">
                <p className="value-title">Min</p>
                <input
                  className="values"
                  value={tempMinVal}
                  type="text"
                  onBlur={handleOnBlurMin}
                  onChange={(e) => {
                    setTempMinVal(Number(e.target.value));
                  }}
                  // onChange={handleMinChange}
                />
              </div>
              <span> &#8212; </span>
              <div className="values-container">
                <p className="value-title">Max</p>
                <input
                  className="values"
                  value={tempMaxVal}
                  type="text"
                  onBlur={handleOnBlurMax}
                  onChange={(e) => {
                    setTempMaxVal(Number(e.target.value));
                  }}
                />
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
