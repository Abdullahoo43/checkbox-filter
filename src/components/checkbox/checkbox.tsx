// import { Stage, State } from "../../types";
import Button from "../button/button";
import "./checkbox.css";

const Checkbox = (props: {
  isCheck?: boolean;
  label?: string;
  button?: string;
  handleSelectedStates?: (isCheck: boolean, label: string) => void;
}) => {
  const { label, button, handleSelectedStates, isCheck } = props;
  return (
    <>
      {label ? (
        <div className="checkbox-container main-checkbox">
          <input
            className="checkbox"
            checked={isCheck}
            type="checkbox"
            onChange={
              handleSelectedStates
                ? (e) => handleSelectedStates(e.target.checked, label as string)
                : undefined
            }
          />
          {label ? <label>{label}</label> : <></>}
        </div>
      ) : (
        <div className="checkbox-container sub-checkbox">
          <input
            className="checkbox"
            checked={isCheck}
            type="checkbox"
            onChange={
              handleSelectedStates
                ? (e) =>
                    handleSelectedStates(e.target.checked, button as string)
                : undefined
            }
          />
          {button ? <Button value={button} /> : <></>}
        </div>
      )}

      {/* <div className="sub-checkbox">
        {label && label === "Active" ? (
          <>
            <Checkbox isCheck={true} button={"Pre-Contract"} />
            <Checkbox button={"In Development"} />
            <Checkbox button={"In Construction"} />
            <Checkbox button={"Operating"} />
          </>
        ) : (
          <></>
        )}
        {label && label === "Inactive" ? (
          <div className="sub-checkbox">
            <Checkbox button={"Cancelled"} />
          </div>
        ) : (
          <></>
        )}
      </div> */}
    </>
  );
};

export default Checkbox;
