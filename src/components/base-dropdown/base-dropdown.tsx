import Checkbox from "../checkbox/checkbox";
import "./base-dropdown.css";

const BaseDropdown = (props: { labels: string[] }) => {
  const { labels } = props;
  return (
    <div className="dropdown">
      {labels.map((label: string) => (
        <Checkbox label={label} />
      ))}
    </div>
  );
};

export default BaseDropdown;
