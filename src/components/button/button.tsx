import "./button.css";

const Button = (props: { value: string }) => {
  const { value } = props;
  return (
    <button
      className={`base-button ${value.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {value}
    </button>
  );
};

export default Button;
