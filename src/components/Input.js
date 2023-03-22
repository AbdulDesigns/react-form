import React from "react";
import "../styles/inputStyles.css";

const Input = ({ labelName, name, id, placeholder, type }) => {
  return (
    <>
      <div className="inputContainer">
        <label className="label" htmlFor={id}>
          {labelName}
        </label>

        <input
          className="textInput"
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
