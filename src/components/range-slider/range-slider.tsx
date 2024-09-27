import React, { useState } from "react";
import FilterBlockHead from "../filter-block-head/filter-block-head";

const RangeSlider: React.FC = () => {
  const [minValue, setMinValue] = useState<number>(10);
  const [maxValue, setMaxValue] = useState<number>(30);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
  };

  return (
    <div className="filter-block">
      <FilterBlockHead
        value={"total: "}
        selectedOptionsToDisplay={String(minValue)}
        onClickHandler={() => {}}
      />
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={minValue}
            onChange={handleMinChange}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={maxValue}
            onChange={handleMaxChange}
          />
          <div
            style={{
              position: "absolute",
              left: `${minValue}%`,
              right: `${100 - maxValue}%`,
              height: "10px",
              background: "red",
            }}
          />
        </div>
        <div>
          <span>{minValue}</span> <span> - </span>
          <span>{maxValue}</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
