import React, { useState } from 'react';
import './App.css';

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion">
      <button className="Accordion__button" onClick={toggleAccordion}>
        {props.title}
      </button>
      <div className={`Accordion__panel ${isOpen ? 'is-open' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Accordion;
