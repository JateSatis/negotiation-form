import React, { useReducer } from "react";

const Select = ({ name, value, setValue, variants }) => {
  const [selected, toggle] = useReducer((selected) => !selected, false);

  return (
    <div className="select-wrapper">
      <label className={value ? "label" : "hidden"}>{name}</label>
      <div
        className={selected ? "select-view select-view-active" : "select-view"}
        onClick={toggle}
      >
        {value || name}
      </div>
      <div onClick={toggle} className={selected ? "dropdown" : "hidden"}>
        {variants.map((elem, index) => {
          return (
            <div className="option" onClick={() => setValue(elem)} key={index}>
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
