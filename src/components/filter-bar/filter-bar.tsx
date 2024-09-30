// import { ProjectType, State, Svg } from "../../types";

import FilterBlockStage from "../filter-block-stage/filter-block-stage";
import FilterBlock from "../filter-block/filter-block";
import RangeSlider from "../range-slider/range-slider";

import "./filter-bar.css";

export const FilterBar = (props: {
  labels: {
    active: string[];
    inActive: string[];
    state: string[];
    projectType: string[];
  };
  selectedStates: string[];
  handleSelectedStates: (isCheck: boolean, label: string) => void;
  selectedProjectTypes: string[];
  handleSelectedProjectTypes: (isCheck: boolean, label: string) => void;
  selectedActiveStages: string[];
  handleSelectedActiveStages: (isCheck: boolean, label: string) => void;
  selectedInActiveStages: string[];
  handleSelectedInActiveStages: (isCheck: boolean, label: string) => void;
  minValue: number;
  handleMinChange: (e: any) => void;
  maxValue: number;
  handleMaxChange: (e: any) => void;
}) => {
  const {
    labels,
    selectedStates,
    handleSelectedStates,
    selectedProjectTypes,
    handleSelectedProjectTypes,
    selectedActiveStages,
    handleSelectedActiveStages,
    selectedInActiveStages,
    handleSelectedInActiveStages,
    minValue,
    handleMinChange,
    maxValue,
    handleMaxChange,
  } = props;

  console.log(
    "checking the bug",
    selectedStates.length,
    labels.state.length - 1
  );

  const stageToDisplay = (): string[] => {
    let stage: string[] = [];
    if (selectedActiveStages.length === labels.active.length)
      stage.push("Active");
    else stage.push(...selectedActiveStages);
    if (selectedInActiveStages.length === labels.inActive.length)
      stage.push("Inactive");

    return stage;
  };

  return (
    <div className="filter-bar">
      <FilterBlockStage
        value={"Stage: "}
        selectedOptionsToDisplay={stageToDisplay()[0]}
        activeLabels={labels.active}
        inActiveLabels={labels.inActive}
        handleSelectedActiveStages={handleSelectedActiveStages}
        selectedActiveStages={selectedActiveStages}
        handleSelectedInActiveStages={handleSelectedInActiveStages}
        selectedInActiveStages={selectedInActiveStages}
      />
      <FilterBlock
        value={"State: "}
        selectedOptionsToDisplay={
          selectedStates.length === labels.state.length
            ? "All"
            : selectedStates[0]
        }
        labels={labels.state}
        handleSelectedOptions={handleSelectedStates}
        selectedOptions={selectedStates}
      />
      <FilterBlock
        value={"Project Type: "}
        selectedOptionsToDisplay={
          selectedProjectTypes.length === labels.projectType.length
            ? "All"
            : selectedProjectTypes.length
            ? selectedProjectTypes[0]
            : ""
        }
        labels={labels.projectType}
        handleSelectedOptions={handleSelectedProjectTypes}
        selectedOptions={selectedProjectTypes}
      />
      <RangeSlider
        minValue={minValue}
        handleMinChange={handleMinChange}
        maxValue={maxValue}
        handleMaxChange={handleMaxChange}
      />
    </div>
  );
};

export default FilterBar;
