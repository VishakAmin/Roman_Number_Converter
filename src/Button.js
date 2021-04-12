import react from "react";
import "./button.css";

const Button = ({ buttonText, type, onClick }) => {
  return (
    <button onClick={onClick} className={type}>
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
