import { useState } from "react";
import arrow from "../../images/arrow_up.png";
import "./styles.css";

const Accordion = (props) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion" onClick={toggle}>
      <div className="accordion-title">
        <span>{title}</span>
        <img
          className={isOpen ? "toggle opened" : "toggle"}
          src={arrow}
          alt="Toggle Accordion"
        />
      </div>
      <div
        className={isOpen ? "accordion-content opened" : "accordion-content"}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
