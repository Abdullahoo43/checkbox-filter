import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.css"; // Add your CSS styles here

interface CustomSelectProps {
  options: number[]; // You can change this to string[] if needed
  value: number; // Change to string if needed
  onChange: (value: number) => void; // Change to (value: string) if needed
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(value);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: number) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <span className="arrow">&#9660;</span> {/* Custom dropdown arrow */}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
