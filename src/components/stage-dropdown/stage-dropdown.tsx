import Checkbox from "../checkbox/checkbox";
import "./stage-dropdown.css";

const StageDropdown = (props: {
  activeLabels: string[];
  inActiveLabels: string[];
  handleSelectedActiveStages?: (isCheck: boolean, label: string) => void;
  selectedActiveStages?: string[];
  handleSelectedInActiveStages?: (isCheck: boolean, label: string) => void;
  selectedInActiveStages?: string[];
}) => {
  const {
    activeLabels,
    inActiveLabels,
    handleSelectedActiveStages,
    selectedActiveStages,
    handleSelectedInActiveStages,
    selectedInActiveStages,
  } = props;
  return (
    <div className="dropdown">
      <Checkbox
        isCheck={
          selectedActiveStages ? selectedActiveStages.length !== 0 : false
        }
        label={"Active"}
        handleSelectedStates={handleSelectedActiveStages}
      />
      {activeLabels.map((label) => (
        <Checkbox
          isCheck={
            selectedActiveStages ? selectedActiveStages.includes(label) : false
          }
          button={label}
          handleSelectedStates={handleSelectedActiveStages}
        />
      ))}
      <Checkbox
        isCheck={
          selectedInActiveStages ? selectedInActiveStages.length !== 0 : false
        }
        label={"Inactive"}
        handleSelectedStates={handleSelectedInActiveStages}
      />
      {inActiveLabels.map((label) => (
        <Checkbox
          isCheck={
            selectedInActiveStages
              ? selectedInActiveStages.includes(label)
              : false
          }
          button={label}
          handleSelectedStates={handleSelectedInActiveStages}
        />
      ))}
    </div>
  );
};

export default StageDropdown;
