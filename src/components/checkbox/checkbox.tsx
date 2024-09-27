import { Stage } from "../../types";
import Button from "../button/button";
import "./checkbox.css";

const Checkbox = (props: { label?: string; button?: Stage }) => {
  const { label, button } = props;
  return (
    <>
      <div className="checkbox">
        <input type="checkbox" />
        {label ? <label>{label}</label> : <></>}
        {button ? <Button value={button} /> : <></>}
      </div>
      <div className="sub-checkbox">
        {label && label === "Active" ? (
          <>
            <Checkbox button={Stage.PRE_CONTRACT} />
            <Checkbox button={Stage.IN_DEVELOPMENT} />
            <Checkbox button={Stage.IN_CONSTRUCTION} />
            <Checkbox button={Stage.OPERATING} />
          </>
        ) : (
          <></>
        )}
        {label && label === "Inactive" ? (
          <div className="sub-checkbox">
            <Checkbox button={Stage.CANCELLED} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Checkbox;
